# Comments Components

Bộ components được chia nhỏ để quản lý comments system với light mode design.

## 🏗️ Cấu trúc Components

### 2. **CommentInput**

- Form nhập comment mới
- Props: `onAddComment`
- Hỗ trợ Enter để submit

### 3. **CommentsList**

- Danh sách tất cả comments
- Props: `comments`, `onLikeComment`, `onReplyComment`
- Hiển thị empty state khi không có comments

### 4. **CommentItem**

- Component hiển thị một comment
- Bao gồm author info, content, like/reply buttons
- Props: `comment`, `onLikeComment`, `onReplyComment`

### 5. **CommentReply**

- Form reply cho một comment
- Props: `commentId`, `onReply`, `onCancel`
- Hỗ trợ Enter để submit

## 🎨 Light Mode Design

- **Background**: `bg-white`
- **Text**: `text-gray-900` (primary), `text-gray-700` (secondary), `text-gray-500` (muted)
- **Borders**: `border-gray-200`, `border-gray-300`
- **Buttons**: Blue accent colors với hover states
- **Author badges**: `bg-blue-100 text-blue-700`

## 📁 File Structure

```
src/components/comments/
├── index.ts                 # Export tất cả components
├── CommentItem.tsx          # Component hiển thị một comment
├── CommentReply.tsx         # Form reply cho comment
├── CommentInput.tsx         # Form nhập comment mới
├── CommentsList.tsx         # Danh sách comments
├── CommentsHeader.tsx       # Header của offcanvas
└── README.md               # Documentation
```

## 🚀 Cách sử dụng

```tsx
import {
  CommentInput,
  CommentsHeader,
  CommentsList,
} from "@/components/comments";

// Trong CommentsOffcanvas
<SheetContent side="right" className="w-[400px] bg-white sm:w-[540px]">
  <CommentsHeader commentsCount={comments.length} onClose={onClose} />

  <CommentInput onAddComment={onAddComment} />

  <CommentsList
    comments={comments}
    onLikeComment={onLikeComment}
    onReplyComment={onReplyComment}
  />
</SheetContent>;
```

## ✨ Features

- **Modular Design**: Mỗi component có trách nhiệm riêng
- **Light Mode**: Thiết kế sáng, dễ đọc
- **Responsive**: Hoạt động tốt trên mobile và desktop
- **TypeScript**: Full type safety
- **Accessibility**: Keyboard navigation và screen reader support
- **Reusable**: Có thể tái sử dụng trong các context khác

## 🔧 Customization

Mỗi component có thể được customize thông qua:

- CSS classes
- Props interface
- Styling variants

Ví dụ:

```tsx
<CommentItem
  comment={comment}
  onLikeComment={handleLike}
  className="custom-comment-style"
/>
```
