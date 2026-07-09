export function getTypeName(type: number) {
  switch (type) {
    case 1:
      return "SLASH";

    case 2:
      return "CONTEXT_USER";

    case 3:
      return "CONTEXT_MESSAGE";

    default:
      return "UNKNOWN";
  }
}

export function getIntegrationNames(
  integration?: number[]
) {
  if (!integration) return [];

  return integration.map((v) => {
    switch (v) {
      case 0:
        return "GUILD";

      case 1:
        return "USER";

      default:
        return "UNKNOWN";
    }
  });
}