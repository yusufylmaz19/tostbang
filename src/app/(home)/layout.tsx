import ThemeRegistry from "@/src/theme/ThemeRegistry";
import StoreProvider from "../../lib/storeProvider";
import ResponsiveDrawer from "../../components/navigation/layout";
import AuthProvider from "../../components/authProvider";

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
              <ResponsiveDrawer>{children}</ResponsiveDrawer>
            </AuthProvider>
          </body>
        </html>
      </ThemeRegistry>
    </StoreProvider>
  );
}
