import { env } from "../config/env";
import { setupApp } from "./app";

function bootstrap(){
  const app = setupApp();

  app.listen(env.PORT, () => {
    console.log(`Server started on port ${env.PORT}`);
  });
}
bootstrap()