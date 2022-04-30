<script lang="ts">
  import Fa from "svelte-fa";
  import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
  export let name: string;
  export let server;
  const ideas = server.fetchAll();
</script>

{#if false}
  {#await ideas}
    {console.log("waiting")}
    <!-- ideas is pending -->
  {:then value}
    {JSON.stringify(value)}
    <!-- ideas was fulfilled -->
  {:catch error}
    {console.log(error)}
    <!-- ideas was rejected -->
  {/await}
{/if}

<div class="app">
  <div class="options">
    <div id="icon" />
    <div id="icon" />
    <div id="icon" />
    <div id="icon" />
    <div id="icon" />
  </div>

  <div class="main">
    <div class="video" />
    <div class="dashboard" />
  </div>

  <div class="chat">
    <div class="chat-body" />
    <div class="chat-input">
      <input type="text" name="chat" />
      <button><Fa icon={faPaperPlane} /></button>
    </div>
  </div>
</div>

<style type="text/scss">
  .app {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 10% auto 25%;
    background-color: #ff3e00;
  }
  .options {
    display: grid;
    grid-auto-flow: row;
    background-color: blue;
  }
  .main {
    display: grid;
    grid-template-rows: auto 10%;
    background-color: green;
  }

  .dashboard {
    display: grid;
    grid-template-columns: 10% auto 25%;
    background-color: beige;
  }
  .chat {
    display: grid;
    grid-template-rows: auto 5%;
    background-color: yellow;
  }
  .chat-body {
    display: grid;
    grid-template-rows: auto;
    background-color: chocolate;
  }
  .chat-input {
    display: grid;
    grid-template-columns: auto 10%;
    align-items: auto;
    background-color: indigo;
  }

  #icon {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    vertical-align: bottom;
  }
  body {
    margin: 0;
    padding: 0;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
