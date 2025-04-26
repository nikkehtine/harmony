import type { Route } from "./+types/home";

import { Welcome } from "@/welcome/welcome";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Harmony" },
        { name: "description", content: "Hang out with your bros" },
    ];
}

export default function Home() {
    return <Welcome />;
}
