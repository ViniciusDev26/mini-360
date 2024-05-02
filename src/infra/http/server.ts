import { setupApp } from "./app";

function bootstrap(){
  const app = setupApp();

  app.listen(3333, () => {
    console.log('Server started on port 3333');
  });
}
void bootstrap()