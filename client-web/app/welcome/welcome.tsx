import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
    return (
        <main className="flex flex-col items-center justify-center pt-16 pb-4">
            <img
                className="hidden max-w-[600px] p-6 dark:block"
                src={logoDark}
            />
            <img
                className="block max-w-[600px] p-6 dark:hidden"
                src={logoLight}
            />
            <p className="p-6">Hello World</p>
        </main>
    );
}
