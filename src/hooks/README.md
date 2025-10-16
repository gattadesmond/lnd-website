# View Tracking Hook

## useViewTracking

Hook để track lượt view của tất cả loại content (stories, events, learning) một cách thông minh, tránh tăng view không cần thiết.

### Cách hoạt động

1. **Session-based tracking**: Sử dụng `sessionStorage` để lưu trạng thái đã view
2. **Delay tracking**: Chờ 1 giây trước khi track để đảm bảo user thực sự đang xem
3. **Tránh spam**: F5/refresh không tăng view
4. **Tự động hết hạn**: Session storage tự động clear khi đóng tab
5. **Multi-content support**: Hỗ trợ stories, events, learning

### Sử dụng

```tsx
import { useViewTracking } from "@/hooks/useViewTracking";

function MyComponent({
  contentId,
  contentType,
}: {
  contentId: string;
  contentType: "stories" | "events" | "learning";
}) {
  const { hasTracked, isLoading } = useViewTracking({ contentId, contentType });

  return (
    <div>
      {isLoading && <p>Tracking view...</p>}
      {hasTracked && <p>View đã được track</p>}
    </div>
  );
}
```

### Props

- `contentId`: ID của content cần track
- `contentType`: Loại content ('stories' | 'events' | 'learning')
- `enabled`: Bật/tắt tracking (mặc định: true)

### Return values

- `hasTracked`: Boolean - đã track view chưa
- `isLoading`: Boolean - đang trong quá trình track

### ViewTracker Component

Component đơn giản để track view mà không cần render gì:

```tsx
import { ViewTracker } from "@/components/content/ViewTracker";

function StoryPage({ storyId }: { storyId: string }) {
  return (
    <div>
      <ViewTracker contentId={storyId} contentType="stories" />
      {/* Rest of your content */}
    </div>
  );
}
```

### Helper Components

Sử dụng các helper components để code gọn hơn:

```tsx
import { StoryViewTracker, EventViewTracker, LearningViewTracker } from '@/components/content/ViewTracker'

// Cho stories
<StoryViewTracker contentId={storyId} />

// Cho events
<EventViewTracker contentId={eventId} />

// Cho learning
<LearningViewTracker contentId={learningId} />
```

### Database Tables

Hook sẽ tự động insert vào các bảng tương ứng:

- `story_views` với field `story_id`
- `event_views` với field `event_id`
- `learning_views` với field `learning_id`
