"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import {
  BookOpen,
  Calculator,
  Calendar,
  Calendar as CalendarIcon,
  CreditCard,
  FileText,
  MessageSquare,
  Search,
  Settings,
  Smile,
  User,
  Users,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const router = useRouter();

  const handleSelect = (value: string) => {
    onOpenChange(false);
    router.push(value);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Tìm kiếm trang, bài viết, sự kiện..." />
      <CommandList>
        <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>

        <CommandGroup heading="Trang chính">
          <CommandItem onSelect={() => handleSelect("/")}>
            <Search className="mr-2 h-4 w-4" />
            <span>Trang chủ</span>
            <CommandShortcut>⌘H</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/about")}>
            <Users className="mr-2 h-4 w-4" />
            <span>Về chúng tôi</span>
            <CommandShortcut>⌘A</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Nội dung">
          <CommandItem onSelect={() => handleSelect("/blog")}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Blog</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/stories")}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Câu chuyện</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect("/events")}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Sự kiện</span>
            <CommandShortcut>⌘E</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Công cụ">
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Máy tính</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Lịch</span>
            <CommandShortcut>⌘L</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Liên hệ</span>
            <CommandShortcut>⌘M</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Tài khoản">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Hồ sơ</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Thanh toán</span>
            <CommandShortcut>⌘T</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Cài đặt</span>
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

// Hook để sử dụng SearchCommand với keyboard shortcut
export function useSearchCommand() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return { open, setOpen };
}
