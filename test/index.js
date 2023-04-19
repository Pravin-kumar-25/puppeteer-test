const puppeteer = require("puppeteer")

const run = async function() {
    let browser;

    try {
        browser = await puppeteer.launch({
            headless: false, slowMo: 0, ignoreHTTPSErrors: true
        })
        console.log("after browser")
        const page = await browser.newPage();

        await page.goto("https://www.flipkart.com")
        console.log("before browser close")
        
        await browser.close()
        console.log("after browser close")
    } catch (error) {
        console.log("-------Error occured while running the script-------");
        console.log(error)

    }
}

run();