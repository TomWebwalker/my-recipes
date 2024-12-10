import { auth, signIn } from "@/auth";
import UserMenu from "./user-menu";

export default async function AuthButton() {
    const session = await auth()
    if (session) {
        return <UserMenu
            user={{
                name: session.user?.name || "",
                email: session.user?.email || "",
                avatar: session.user?.image || ""
            }} />
    }

    return <form
        action={async () => {
            "use server"
            await signIn("github")
        }}
    >
        <button type="submit">Signin with Github</button>
    </form>

}
