import { options } from "@/src/app/api/auth/[...nextauth]/options";
import HomeLayout from "./homeLayout";
import { getServerSession } from "next-auth";

interface Props {
  children: React.ReactNode;
  window?: () => Window;
}

export default async function ResponsiveDrawer(props: Props) {
  const data = await getServerSession(options);
  const username = data?.user?.role;
  return <HomeLayout username={username}>{props.children}</HomeLayout>;
}
