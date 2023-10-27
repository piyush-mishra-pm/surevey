# 3D survey :
using ThreeJS, ReactThreeFibre.

Issues:
- Multiple instances of same gltf path cant have different position, rotation, scale, etc.
- onClick, the scaling should happen only for 1 mesh, not others. Currently if we click one (that gets scaled), and then if we click other, then other gets scaled too.