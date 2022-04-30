import App from "./App.svelte";

const server = {
  port: 3030,
  domain: "http://localhost",
  async fetchAll() {
    const service = `${this.domain}:${this.port}/ideas`;
    console.log(service);
    const res = await fetch(service);
    const ideas = await res.json();
    if (res.ok) {
      return ideas;
    } else {
      throw new Error(ideas);
    }
  },
};

const app = new App({
	target: document.body,
	props: {
    name: 'world',
    server
	}
});

export default app;