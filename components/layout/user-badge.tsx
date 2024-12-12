import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function UserBadge({
    user,
}: {
    user: {
        name: string
        email: string
        avatar: string
    },
}) {
    return <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{user.name}</span>
            <span className="truncate text-xs">{user.email}</span>
        </div>
    </div>
}