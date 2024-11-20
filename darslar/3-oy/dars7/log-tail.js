import { Logtail } from "@logtail/node";
import { config } from "dotenv";
config()

const logtail = new Logtail(process.env.LOGGER_TOKEN)

logtail.error("something bad happend")
logtail.info("log messega with structured data", {
    item: "orange soda",
    price: 100.0
})
logtail.flush()