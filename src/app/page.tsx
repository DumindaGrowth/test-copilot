'use client';

const CopilotIframe = () => {

  const protocol = "https";
  const host = "copilotstudio.microsoft.com";
  const path = "/environments/5f0533f6-28ce-e80d-82af-60593db7cec8/bots/cr698_copilot_dDnsMG/webchat";
  const queryParams = {
    __version__: "2",
  };

  const baseUrl = new URL(`${protocol}://${host}${path}`);

  for (const [key, value] of Object.entries(queryParams)) {
    baseUrl.searchParams.append(key, value);
  }

  return (
    <>
      <iframe
        src={baseUrl.toString()}
        style={{ width: '100vw', height: '100vh' }}
      >
      </iframe>
    </>
  );
};

export default CopilotIframe;
