import { Metadata } from "next";
import { AuthWrapper } from "@/components/auth/auth-wrapper";
import { FormLayout } from "@/components/auth/form-layout";
import { Signin } from "@/components/auth/signin";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Sign in",
  description: `Welcome back to ${env.app.name}`,
};

export default function Page() {
  return (
    <AuthWrapper>
      <FormLayout title={"Sign in"}>
        <Signin />
      </FormLayout>
    </AuthWrapper>
  );
}
