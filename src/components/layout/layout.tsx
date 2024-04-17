import HomeLayout from "./homeLayout";
import { getServerSession } from "next-auth";

interface Props {
  children: React.ReactNode;
  window?: () => Window;
}

export default async function ResponsiveDrawer(props: Props) {
  const data = await getServerSession();
  const username = data?.user?.name;
  return <HomeLayout username={username}>{props.children}</HomeLayout>;
}
