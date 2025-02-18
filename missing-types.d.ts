declare module "eslint-plugin-import" {
  const exports: {
    flatConfigs: {
      recommended: Record<string, string>
      typescript: Record<string, string>
    }
  }

  export default exports
}

declare module "eslint-plugin-react-hooks" {
  const exports: {
    configs: {
      "recommended-latest": Record<string, string>
    }
  }
  export default exports
}
