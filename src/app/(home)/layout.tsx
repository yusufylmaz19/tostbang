import ThemeRegistry from "@/src/theme/ThemeRegistry";
import StoreProvider from "../../lib/storeProvider";
import AuthProvider from "../../components/authProvider";
import ToastProvider from "@/src/lib/toastProvider";
import ResponsiveDrawer from "@/src/components/layout/layout";

export const metadata = {
  title: "TostBang",
  description: "HomePage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <ThemeRegistry>
        <html lang="en">
          <body>
            <AuthProvider>
              <ResponsiveDrawer>
                <ToastProvider>{children}</ToastProvider>
              </ResponsiveDrawer>
            </AuthProvider>
          </body>
        </html>
      </ThemeRegistry>
    </StoreProvider>
  );
}
