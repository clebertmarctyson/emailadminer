import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "next-auth";

const UserAvatar = ({ user }: { user: User }) => {
  return (
    <Avatar>
      <AvatarImage src={user?.image as string} />
      <AvatarFallback className="bg-primary-500 uppercase">
        {user?.name ? user.name[0] : ""}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
