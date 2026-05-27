import { redirect } from "next/navigation";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function StartPage() {
  redirect(SITE.funnelUrl);
}
