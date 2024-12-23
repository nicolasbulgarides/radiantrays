class AssetManifest {

    /**
     * Retrieves the URL for a given asset name.
     * @param {string} assetName - The name of the asset.
     * @returns {string|null} - The URL of the asset, or null if not found.
     */
    static getAssetUrl(assetName) {
        return this.assets[assetName] || null;
    }

    // Asset manifest data
    static assets = {
  "cube": "https://raw.githubusercontent.com/nicolasbulgarides/testmodels/main/cube2.glb",
  "spaceSky2": "https://raw.githubusercontent.com/nicolasbulgarides/testmodels/main/spaceSky2.glb",
  "spaceSky3": "https://raw.githubusercontent.com/nicolasbulgarides/testmodels/main/spaceSky3.glb",
  "redCastle": "https://raw.githubusercontent.com/nicolasbulgarides/testmodels/main/redCastle.glb",
  "levelLarge": "https://raw.githubusercontent.com/nicolasbulgarides/testmodels/main/levelLarge.glb",
  "spaceSky": "https://raw.githubusercontent.com/nicolasbulgarides/testmodels/main/spaceSky.glb",
  "running": "https://raw.githubusercontent.com/nicolasbulgarides/testmodels/main/running.glb",
  "statue": "https://raw.githubusercontent.com/nicolasbulgarides/testmodels/main/statue.glb"
};
}

// Export AssetManifest class globally
window.AssetManifest = AssetManifest;
