import ThemeRegistry from "@/src/theme/ThemeRegistry";
import StoreProvider from "../../lib/storeProvider";
import AuthProvider from "../../components/authProvider";
import ToastProvider from "@/src/lib/toastProvider";
import ResponsiveDrawer from "@/src/components/layout/layout";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export const metadata = {
  title: "TostBang",
  description: "HomePage",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getServerSession(options);

  return (
    <StoreProvider>
      <ThemeRegistry>
        <html lang="en">
          <body>
            <AuthProvider session={data}>
              <ToastProvider>
                <ResponsiveDrawer>{children}</ResponsiveDrawer>
              </ToastProvider>
            </AuthProvider>
          </body>
        </html>
      </ThemeRegistry>
    </StoreProvider>
  );
}
