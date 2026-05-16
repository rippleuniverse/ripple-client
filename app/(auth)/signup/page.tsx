import { Metadata } from "next";
import { AuthWrapper } from "@/components/auth/auth-wrapper";
import { FormLayout } from "@/components/auth/form-layout";
import { SignUp } from "@/components/auth/signup";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Sign up",
  description: `Get started with ${env.app.name}`,
};

export default function Page() {
  return (
    <AuthWrapper>
      <FormLayout title={"Sign up"}>
        <SignUp />
      </FormLayout>
    </AuthWrapper>
  );
}
