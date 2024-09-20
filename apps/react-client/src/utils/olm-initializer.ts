// olmInitializer.ts
import * as Olm from "@matrix-org/olm";

export async function initializeOlm() {
    try {
        await Olm.init();
        (window as any).Olm = Olm;
        console.log("Olm initialized successfully");
    } catch (error) {
        console.error("Failed to initialize Olm:", error);
        throw error;
    }
}
