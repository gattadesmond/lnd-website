# Date Utilities

Bộ utility functions để format và hiển thị date một cách nhất quán trong toàn bộ ứng dụng.

## 🎯 Tính năng

- ✅ **Consistent Formatting**: Format date nhất quán
- ✅ **Error Handling**: Xử lý lỗi và fallback
- ✅ **Multiple Variants**: Nhiều loại format khác nhau
- ✅ **TypeScript Support**: Type safety đầy đủ
- ✅ **Reusable**: Tái sử dụng ở nhiều nơi

## 📁 Cấu trúc

### 1. `dateUtils.ts`

Utility functions cho date formatting:

- `formatDate()`: Function chính với nhiều options
- `formatDisplayDate()`: Format cho hiển thị chính
- `formatMetaDate()`: Format ngắn gọn cho meta
- `formatRelativeDate()`: Format relative time
- `getDateTimeAttribute()`: ISO string cho HTML

### 2. `DateDisplay.tsx`

Component UI để hiển thị date:

- Props: `date`, `variant`, `className`, `fallback`
- Variants: `display`, `meta`, `relative`
- Automatic HTML time element

## 🚀 Cách sử dụng

### 1. Utility Functions

```typescript
import {
  formatDisplayDate,
  formatMetaDate,
  formatRelativeDate,
} from "@/lib/dateUtils";

// Display format (long)
const displayDate = formatDisplayDate("2024-01-15T00:00:00Z");
// Output: "January 15, 2024"

// Meta format (short)
const metaDate = formatMetaDate("2024-01-15T00:00:00Z");
// Output: "Jan 15, 2024"

// Relative format
const relativeDate = formatRelativeDate("2024-01-15T00:00:00Z");
// Output: "2 days ago"
```

### 2. DateDisplay Component

```typescript
import { DateDisplay } from "@/components/ui/DateDisplay";

// Display variant
<DateDisplay
  date={story.published_at}
  variant="display"
  className="text-sm text-neutral-500"
/>

// Meta variant
<DateDisplay
  date={story.published_at}
  variant="meta"
  className="text-xs text-neutral-400"
/>

// Relative variant
<DateDisplay
  date={story.published_at}
  variant="relative"
  className="text-xs text-neutral-400"
/>
```

### 3. Trong RelatedContent

```typescript
// Tự động sử dụng DateDisplay component
<RelatedContent
  content={relatedStories}
  currentContentId={story.id}
  title="Read more"
  basePath="/stories"
/>
```

## 🎨 Format Variants

### Display Format

- **Input**: `"2024-01-15T00:00:00Z"`
- **Output**: `"January 15, 2024"`
- **Use case**: Main content, headers

### Meta Format

- **Input**: `"2024-01-15T00:00:00Z"`
- **Output**: `"Jan 15, 2024"`
- **Use case**: Sidebar, metadata

### Relative Format

- **Input**: `"2024-01-15T00:00:00Z"`
- **Output**: `"2 days ago"`
- **Use case**: Recent content, notifications

## 🔧 Error Handling

```typescript
// Invalid date
formatDisplayDate("invalid-date"); // "Recently"
formatDisplayDate(null); // "Recently"
formatDisplayDate(undefined); // "Recently"

// Custom fallback
formatDisplayDate("invalid-date", { fallback: "No date" }); // "No date"
```

## 📊 Use Cases

### 1. Story Detail Page

```typescript
<DateDisplay
  date={story.published_at}
  variant="display"
  className="text-sm text-neutral-500"
/>
```

### 2. Related Content

```typescript
<DateDisplay
  date={item.published_at}
  variant="display"
  className="text-xs text-neutral-400"
/>
```

### 3. Meta Information

```typescript
<DateDisplay
  date={story.created_at}
  variant="meta"
  className="text-xs text-neutral-400"
/>
```

### 4. Recent Content

```typescript
<DateDisplay
  date={story.published_at}
  variant="relative"
  className="text-xs text-neutral-400"
/>
```

## ✨ Benefits

1. **Consistency**: Format date nhất quán
2. **Error Handling**: Xử lý lỗi tự động
3. **Reusability**: Tái sử dụng ở nhiều nơi
4. **Type Safety**: TypeScript đảm bảo an toàn
5. **Performance**: Optimized date parsing
6. **Accessibility**: HTML time element với datetime attribute

## 🎯 Best Practices

1. **Use DateDisplay component** cho UI
2. **Use utility functions** cho logic
3. **Always provide fallback** cho edge cases
4. **Use appropriate variant** cho context
5. **Handle timezone** nếu cần thiết

Tất cả date formatting đã được tổng quát hóa và sẵn sàng sử dụng! 🎉
