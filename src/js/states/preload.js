export default class Preload extends Phaser.State {

    preload() {
      // Background Image
      this.load.image('sky', 'assets/images/background/bckgrnd.png');

      // Spritesheets
      this.load.tilemap('forrest', 'assets/images/tiles/forrest.json', null, Phaser.Tilemap.TILED_JSON);
      this.load.spritesheet('collision-spritesheet', 'assets/images/tiles/ninja-tiles16.png', 16, 16);
      this.load.atlasJSONArray('vampire', 'assets/images/sprites/vampire.png', 'assets/images/sprites/vampire.json');
      this.load.atlasJSONArray('items', 'assets/images/items/items.png', 'assets/images/items/items.json');
      this.load.atlasJSONArray('hud', 'assets/images/hud/hud.png', 'assets/images/hud/hud.json');
      this.load.atlasJSONArray('groundTiles', 'assets/images/tiles/ground.png', 'assets/images/tiles/ground.json');
      this.load.atlasJSONArray('background-objects', 'assets/images/background/bckgrnd.png', 'assets/images/background/background-objects.json');
      this.load.atlasJSONArray('enemies', 'assets/images/enemies/enemies.png', 'assets/images/enemies/enemies.json');

    }

    create() {
        this.state.start('Menu');
    }

}
