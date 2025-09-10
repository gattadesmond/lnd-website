/* eslint-disable */

import { get, map, omit } from "lodash-es";

export const generateDataArticle = ({ data }: any) => {
  const customData = map(data?.data, (item) => {
    const newItem = {
      ...omit(item?.attributes, ["tags", "coverImage", "authors"]),
      categoryName: map(get(item, "attributes.tags.data", []), (category) =>
        get(category, "attributes.name", null),
      ),
      coverImageUrl: get(
        item,
        "attributes.coverImage.data.attributes.url",
        null,
      ),
      authors: map(get(item, "attributes.authors.data", []), (author) => ({
        id: get(author, "id", null),
        userName: get(author, "attributes.userName", null),
        avatar: get(author, "attributes.avatar.data.attributes.url", null),
        fullName: get(author, "attributes.fullName", null),
        teamsInfo: {
          teamName: get(
            author,
            "attributes.teams_product.data.attributes.teamName",
            null,
          ),
          teamId: get(
            author,
            "attributes.teams_product.data.attributes.id",
            null,
          ),
        },
        title: get(author, "attributes.title", null),
      })),
      id: item?.id,
    };
    return newItem;
  });
  return customData;
};

export const generateDataArticleDetail = ({ data }: any) => {
  const newItem = {
    ...omit(data?.attributes, ["tags", "coverImage", "authors"]),
    categoryName: map(get(data, "attributes.tags.data", []), (category) =>
      get(category, "attributes.name", null),
    ),
    coverImageUrl: get(data, "attributes.coverImage.data.attributes.url", null),
    authors: map(get(data, "attributes.authors.data", []), (author) => ({
      id: get(author, "id", null),
      userName: get(author, "attributes.userName", null),
      avatar: get(author, "attributes.avatar.data.attributes.url", null),
      fullName: get(author, "attributes.fullName", null),
      teamsInfo: {
        teamName: get(
          author,
          "attributes.teams_product.data.attributes.teamName",
          null,
        ),
        teamId: get(
          author,
          "attributes.teams_product.data.attributes.id",
          null,
        ),
      },
      title: get(author, "attributes.title", null),
    })),
    id: data?.id,
  };
  return newItem;
};

export const generateDataCate = ({ data }: any) => {
  const customData = map(data?.data, (item) => {
    const newItem = {
      id: item?.id,
      ...item?.attributes,
    };
    return newItem;
  });
  return customData;
};
