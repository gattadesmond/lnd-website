# Content Components - Tổng quát

Bộ components được tối ưu hóa để tái sử dụng cho tất cả loại nội dung (Stories, Events, Learning).

## 🎯 Cấu trúc tổng quát

### 1. **RelatedContent Component**

- Component chính hiển thị nội dung liên quan
- UI giống hệt design system hiện tại
- Hỗ trợ tất cả loại nội dung

### 2. **fetchRelatedContent Function**

- Hook tổng quát để fetch dữ liệu
- Nhận `tableName` parameter
- Hỗ trợ nhiều bảng khác nhau

## 🚀 Cách sử dụng

### Stories

```typescript
const relatedStories = await fetchRelatedContent({
  tableName: "stories_overview",
  categorySlug: story.category?.slug || "",
  currentContentId: story.id,
  limit: 4
});

<RelatedContent
  content={relatedStories}
  currentContentId={story.id}
  title="Read more"
  basePath="/stories"
/>
```

### Events

```typescript
const relatedEvents = await fetchRelatedContent({
  tableName: "events_overview",
  categorySlug: event.category?.slug || "",
  currentContentId: event.id,
  limit: 4
});

<RelatedContent
  content={relatedEvents}
  currentContentId={event.id}
  title="Read more"
  basePath="/events"
/>
```

### Learning

```typescript
const relatedLearning = await fetchRelatedContent({
  tableName: "learning_overview",
  categorySlug: learning.category?.slug || "",
  currentContentId: learning.id,
  limit: 4
});

<RelatedContent
  content={relatedLearning}
  currentContentId={learning.id}
  title="Read more"
  basePath="/learning"
/>
```

## 📁 File Structure

```
src/
├── components/content/
│   ├── RelatedContent.tsx          # Component tổng quát
│   ├── ContentPage.tsx            # Page component
│   ├── ContentPageHeader.tsx      # Header component
│   └── CategoryNavigation.tsx     # Navigation component
├── lib/
│   └── fetchRelatedContent.ts     # Function tổng quát
└── app/
    ├── stories/[slug]/page.tsx    # Stories detail
    ├── events/[slug]/page.tsx     # Events detail
    └── learning/[slug]/page.tsx   # Learning detail
```

## 🎨 UI Features

- **Layout**: `border-t border-grid-border p-10 backdrop-blur-lg`
- **Title**: `py-2 font-display text-xl font-medium`
- **List**: `flex flex-col gap-y-6`
- **Items**: `group flex flex-col items-center gap-4 sm:flex-row`
- **Image**: `aspect-video w-full rounded-lg border border-neutral-200 sm:w-[200px]`
- **Content**: Line-clamp cho title và description
- **Date**: Formatted date display

## 🔧 Database Requirements

Cần có các bảng:

- `stories_overview` / `stories_with_full_details`
- `events_overview` / `events_with_full_details`
- `learning_overview` / `learning_with_full_details`

Với các trường:

- `id`, `slug`, `title`, `excerpt`, `description`
- `cover_image_url`, `published_at`, `view_count`
- `category_slug`, `authors`

## ✨ Benefits

1. **DRY Principle**: Không lặp lại code
2. **Type Safety**: TypeScript đảm bảo an toàn
3. **Reusable**: Tái sử dụng cho tất cả loại nội dung
4. **Consistent UI**: Giao diện đồng nhất
5. **Performance**: Optimized queries và loading
6. **Maintainable**: Dễ bảo trì và mở rộng

## 🎯 Use Cases

- **Story Detail**: Hiển thị stories liên quan
- **Event Detail**: Hiển thị events liên quan
- **Learning Detail**: Hiển thị learning resources liên quan
- **Category Pages**: Có thể sử dụng cho category pages
- **Homepage**: Có thể sử dụng cho featured content

Tất cả đã được tổng quát hóa và sẵn sàng sử dụng! 🎉
