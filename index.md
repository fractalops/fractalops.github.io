---
layout: default
title: "Projects"
---

<h1 class="sr-only">Projects</h1>

<article class="project" id="yappr">
  <h2><a href="https://yappr.run">yappr</a></h2>
  <p>Yappr brings updates, questions, and approval requests from your machines to your other devices. A script can wait for your reply before it continues. Each machine keeps its feed, so devices that were offline catch up when they reconnect.</p>
  <p>Your devices connect directly over iroh where possible. Otherwise, an iroh relay server forwards their end-to-end encrypted traffic. The relay cannot read your entries or answers, and it does not store your feed. You need no account or hosted feed service.</p>
<pre><code>df -h / | yappr post --title "Disk usage"
yappr approve phone "Deploy to production?" && ./deploy</code></pre>
  <p class="links"><a href="https://yappr.run">yappr.run</a> · <a href="https://github.com/fractalops/yappr/releases">releases</a> · <a href="https://github.com/fractalops/yappr">source</a> · <a href="https://github.com/fractalops/yappr.run">app source</a></p>
</article>

<article class="project" id="fli">
  <h2><a href="https://github.com/fractalops/fli">fli</a></h2>
  <p>fli queries AWS VPC Flow Logs from the command line. Short commands such as <code>count</code>, <code>sum</code>, and <code>raw</code> take the place of CloudWatch Logs Insights queries. You filter by address, port, protocol, or any other flow log field. fli marks addresses that belong to known cloud providers and adds WHOIS details.</p>
  <p><code>fli init</code> finds your flow logs, or creates them with the IAM role and log group that they need. <code>fli cleanup</code> removes what it created.</p>
<pre><code>fli init
fli count --by srcaddr --filter "action=REJECT and dstport=22" --since 1h</code></pre>
  <p class="links"><a href="https://github.com/fractalops/fli/releases">releases</a> · <a href="https://github.com/fractalops/fli">source</a></p>
</article>
