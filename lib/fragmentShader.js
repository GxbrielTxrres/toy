export const fragmentShader = /*GLSL*/ `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uMouse;
uniform float u_Timee;
uniform vec2 uResolution;
varying vec2 vUv;

float grid(vec2 uv, float size, float lineWidth) {
    float grid = min(mod(uv.x * size, 1.0), mod(uv.y * size, 1.0));
    return smoothstep(lineWidth, 0.0, grid);
}

void main() {
    vec2 uv = vUv;
    vec2 mousePosition = uMouse / uResolution;

    float distanceFromMouse = distance(uv, mousePosition);
    float wave = sin(distanceFromMouse * 30.0 - u_Timee * 3.0) * 0.5 + 0.5;

    vec2 warpUv = uv + (mousePosition - 0.5) * wave * 0.1;
    float gridPattern = grid(warpUv, 20.0, 0.02);

    vec3 colorA = vec3(0.2, 0.8, 0.4);
    vec3 colorB = vec3(0.8, 0.2, 0.4);
    vec3 finalColor = mix(colorA, colorB, gridPattern);

    gl_FragColor = vec4(finalColor, 1.0);
}
`;
