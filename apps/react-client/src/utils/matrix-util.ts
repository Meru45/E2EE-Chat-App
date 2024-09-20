import { createClient, MatrixClient } from "matrix-js-sdk";
import * as Olm from "@matrix-org/olm";

export class Matrix {
    private matrixClient: MatrixClient | null;
    private static instance: Matrix;

    private constructor() {
        this.matrixClient = null;
    }

    public static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Matrix();
        return this.instance;
    }

    public async initializeMatrix(username: string, password: string) {
        if (this.matrixClient) {
            return this.matrixClient;
        }

        // try {
        //     await initializeOlm();
        // } catch (e) {
        //     console.error("Error initializing Olm:", e);
        //     throw new Error("Failed to initialize Olm. WebAssembly support may be missing or blocked.");
        // }

        const baseUrl = "https://matrix.l3xlabs.com";
        this.matrixClient = createClient({
            baseUrl,
        });

        try {
            await this.matrixClient.login("m.login.password", {
                user: username,
                password: password,
            });
            await this.matrixClient.initCrypto();
            await this.matrixClient.startClient();
            return this.matrixClient;
        } catch (error) {
            console.error("Failed to initialize Matrix client:", error);
            throw error;
        }
    }

    public getMatrixClient(): MatrixClient | null {
        return this.matrixClient;
    }
}
