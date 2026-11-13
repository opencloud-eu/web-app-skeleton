<template>
  <main class="ext:p-4">
    <h1>{{ $gettext('Hello developer!') }}</h1>
    <p>
      {{ $gettext('Great to see that you want to learn how to build web apps for OpenCloud.') }}
    </p>
    <p>{{ $gettext('Grab a coffee and follow our instructions. Happy coding!') }}</p>
    <a
      href="https://docs.opencloud.eu/docs/next/dev/web/extension-system/getting-started"
      target="_blank"
    >
      {{ $gettext('Open the developer documentation') }}
    </a>
  </main>
</template>
