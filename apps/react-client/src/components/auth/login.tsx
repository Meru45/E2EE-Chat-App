import { useState } from "react";
// import { useNavigation } from "react-router-dom";
import { Matrix } from "@/utils/matrix-util";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function LoginForm() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    // const navigator = useNavigation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(username);
        console.log(password);
        const res = await Matrix.getInstance().initializeMatrix(username, password);
        console.log(res);
        // router.push("/chat");
    };

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Card className="flex justify-center items-center p-4">
                <div>
                    <CardHeader className="text-3xl font-bold">Get into Matrix</CardHeader>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div>
                            <Label htmlFor="username">Username</Label>
                            <Input
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                id="username"
                                placeholder="john"
                            />
                        </div>
                        <div className="mt-4">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                id="password"
                                placeholder="********"
                            />
                        </div>
                        <div className="flex justify-center items-center mt-4">
                            <Button type="submit">Login</Button>
                        </div>
                    </form>
                    {error && <CardFooter>{error}</CardFooter>}
                </div>
            </Card>
        </div>
    );
}
