# Simple Markdown Editor

## 🎯 Overview

Sử dụng `@uiw/react-md-editor` - một library phổ biến và đơn giản cho markdown editing.

## ✨ Features

- **Professional Editor**: Full-featured markdown editor
- **Live Preview**: Real-time preview
- **Toolbar**: Built-in formatting tools
- **Light Mode**: Clean, professional design
- **Responsive**: Mobile-friendly
- **Easy Integration**: Simple props interface

## 🚀 Usage

### **SimpleMarkdownEditor Component**

```tsx
import { SimpleMarkdownEditor } from "@/components/comments";

<SimpleMarkdownEditor
  value={content}
  onChange={setContent}
  placeholder="Write your comment..."
  onSubmit={handleSubmit}
  onCancel={handleCancel}
/>;
```

### **Props**

| Prop          | Type                        | Description              |
| ------------- | --------------------------- | ------------------------ |
| `value`       | `string`                    | Current markdown content |
| `onChange`    | `(value: string) => void`   | Content change handler   |
| `placeholder` | `string`                    | Placeholder text         |
| `onSubmit`    | `(content: string) => void` | Submit handler           |
| `onCancel`    | `() => void`                | Cancel handler           |
| `className`   | `string`                    | Additional CSS classes   |

## 🎨 Built-in Features

### **Toolbar**

- **Bold** (Ctrl+B)
- **Italic** (Ctrl+I)
- **Link** (Ctrl+K)
- **Code** (Ctrl+`)
- **List** (Ctrl+Shift+8)
- **Quote** (Ctrl+Shift+>)
- **Table**
- **Image**
- **And more...**

### **Preview Mode**

- **Edit Mode**: Write markdown
- **Preview Mode**: See rendered output
- **Split Mode**: Edit and preview side by side

### **Keyboard Shortcuts**

- `Ctrl+B`: Bold
- `Ctrl+I`: Italic
- `Ctrl+K`: Link
- `Ctrl+Shift+8`: List
- `Ctrl+Shift+>`: Quote
- `Ctrl+Enter`: Submit

## 🔧 Integration Examples

### **Comment Input**

```tsx
<SimpleMarkdownEditor
  value={newComment}
  onChange={setNewComment}
  placeholder="Write a thoughtful comment..."
  onSubmit={handleSubmitComment}
/>
```

### **Comment Reply**

```tsx
<SimpleMarkdownEditor
  value={replyContent}
  onChange={setReplyContent}
  placeholder="Write a reply..."
  onSubmit={handleSubmitReply}
  onCancel={handleCancel}
/>
```

## 🎯 Benefits

1. **No Custom Code**: Sử dụng library đã được test kỹ
2. **Professional**: Full-featured editor
3. **Maintained**: Active development và bug fixes
4. **Documentation**: Comprehensive docs
5. **Community**: Large user base
6. **Performance**: Optimized rendering

## 📦 Package Info

- **Package**: `@uiw/react-md-editor`
- **Version**: 4.0.8
- **Size**: ~139 packages
- **License**: MIT
- **GitHub**: https://github.com/uiwjs/react-md-editor

## 🎨 Styling

- **Light Mode**: `data-color-mode="light"`
- **Height**: 120px (customizable)
- **Toolbar**: Built-in, no custom styling needed
- **Responsive**: Mobile-friendly design

## 🔮 Advanced Usage

### **Custom Height**

```tsx
<MDEditor
  height={200}
  // ... other props
/>
```

### **Hide Toolbar**

```tsx
<MDEditor
  hideToolbar={true}
  // ... other props
/>
```

### **Preview Only**

```tsx
<MDEditor
  preview="preview"
  // ... other props
/>
```

## 🛡️ Security

- **XSS Protection**: Built-in sanitization
- **Safe Links**: Automatic link security
- **Content Validation**: Input sanitization
- **No Scripts**: Safe HTML rendering
