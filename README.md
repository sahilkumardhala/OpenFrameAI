[![OpenFrameAI](OpenFrameAI.webp)](https://openframeai.vercel.app/)


# OpenFrameAI

* OpenFrameAI is a versatile, AI-powered platform designed to provide users with a 'wide canvas' to explore, create, and innovate.

* The platform converts UI designs into fully functional web applications with an intuitive interface, making it suitable for professionals, hobbyists, and organizations.

---

# 🔑 API Keys

To use Make Real, you will need to enter an API key for any of the **model providers** that you wish to use.

<aside>
💡 These are your personal API keys so you will be charged directly by the model providers according to your usage. This is currently the only practical way to keep Make Real free and avoid rate limits.

</aside>

# How do I get my API key?

## OpenAI

1. Create an OpenAI account at [platform.openai.com](https://www.notion.so/Make-Real-Help-93be8b5273d14f7386e14eb142575e6e?pvs=21)
2. In your OpenAI API account, navigate to [**Settings > Billing**](https://platform.openai.com/account/billing/overview) 
3. Click **Add to credit balance**
4. Add at least **$5** to your account
5. Navigate to [API Keys](https://platform.openai.com/api-keys)
6. Click **Create new secret key**
7. Copy the key to your clipboard
8. Back on [makereal.tldraw.com](https://makereal.tldraw.com/), click the Settings Button ⚙
9. Paste the key into the OpenAI API Key key text box.


## Anthropic

1. Create an Anthropic account at https://console.anthropic.com/
2. From your Anthropic dashboard, visit [API Keys](https://console.anthropic.com/settings/keys)
3. Click **Create Key**
4. Name your secret key whatever you like.
5. Click **Copy Key**
6. Back on [makereal.tldraw.com](https://makereal.tldraw.com/), click the Settings Button ⚙
7. Paste the key into the Anthropic API Key text box.

<aside>
💡 Want to know more about how API keys? Read this!

[What is an API key?](https://www.notion.so/What-is-an-API-key-fedf5b7ba50d453ba127c3f5f85bee2c?pvs=21)

</aside>

---

## Troubleshooting

😪 **I have a premium ChatGPT subscription. Why isn’t my API key working?**

Your ChatGPT subscription is unrelated to your API Key permissions. To use make real, you need to create an API Key on the OpenAI developer platform and add credit to your account. [Follow these steps](https://www.notion.so/Make-Real-Help-93be8b5273d14f7386e14eb142575e6e?pvs=21) to be sure it works.

😪 **I’m getting this error: `The model gpt-4-vision-preview does not exist or you do not have access to it`**

You’ve created an API key but you haven’t added credit to your account. [Follow these steps](https://www.notion.so/Make-Real-Help-93be8b5273d14f7386e14eb142575e6e?pvs=21) to put at least $5 of credit on your OpenAI developer platform account. If you’re still facing issues with accessing the model, then try [contacting OpenAI support](https://help.openai.com/).

😪 **I’m getting this error: `Error Code 429 - You exceeded your current quota, please check your plan and billing details. But I’ve never used the API before`.**

You’ve gone over the rate limit for your account. You are only allowed a certain number of requests per day. Unfortunately there’s nothing you can do except wait a bit. Contact [OpenAI support](https://help.openai.com/) for help.

😪 **I’m getting this error: `VercelPostgresError: VercelPostgresError - 'missing_connection_string': You did not supply a 'connectionString' and no 'POSTGRES_URL' env var was found.`**

You’ve cloned the make-real repo. Clone the [make-real-starter](https://github.com/tldraw/make-real-starter) repo instead. Unfortunately the original make-real repo relies on additional services that make it impractical for other people to use.

---

## Tips & Tricks

- Want to change something? Instead of starting over, try **drawing on top of a result**, selecting the result and your notes, and clicking **Make Real**. The app will incorporate your notes, annotations, and other markup into its previous work.
- You can add screenshots to the canvas and use those as part of your prompt.
- Click the 🔗 **icon** next to a result to copy the result’s **permanent link**. You can open this link in a regular browser tab—it’s just a website!
- Click the **</> icon** next to a result to copy the **code** for that result. You can paste this code into a text editor to see or edit the code. You can even save it as a **.html file** for a local version of your result!

---

# 🤷‍♀️ What is tldraw?

tldraw is an [infinite canvas SDK](https://tldraw.dev/) for React. 

You can try our collaborative whiteboard demo at [OpenFrameAI](https://openframeai.vercel.app/).

If you’re a developer, you can find out more about the SDK at [tldraw.dev](https://tldraw.dev/).

Want to make your own riff on make real? Clone the [make-real-starter](https://github.com/tldraw/make-real-starter) repo.

---