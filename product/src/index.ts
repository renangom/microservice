import { app } from "./infra/server"


const PORT = 3001;


app.listen(PORT, () => {
    console.log(`App is listenning to port ${PORT}`);
});