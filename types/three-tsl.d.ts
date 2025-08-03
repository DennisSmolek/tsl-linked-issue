// Import the official TSL types
import type { ShaderNodeObject } from 'three/tsl';
import type Node from 'three/src/nodes/core/Node.js';

//* TSL Type Aliases ==============================

// Use the official ShaderNodeObject but create convenient aliases
export type Vec2Node = ShaderNodeObject<Node>;
export type Vec3Node = ShaderNodeObject<Node>;
export type Vec4Node = ShaderNodeObject<Node>;
export type ColorNode = ShaderNodeObject<Node>;
export type FloatNode = ShaderNodeObject<Node>;
export type BoolNode = ShaderNodeObject<Node>;
export type TimeNode = ShaderNodeObject<Node>;
export type PositionNode = ShaderNodeObject<Node>;
export type TSLFunction = () => ShaderNodeObject<Node>;

//* React Three Fiber Extensions ==============================

declare module '@react-three/fiber' {
  interface MeshStandardMaterialProps {
    colorNode?: ShaderNodeObject<Node>;
    fragmentNode?: ShaderNodeObject<Node>;
    vertexNode?: ShaderNodeObject<Node>;
  }

  interface MeshBasicMaterialProps {
    colorNode?: ShaderNodeObject<Node>;
    fragmentNode?: ShaderNodeObject<Node>;
    vertexNode?: ShaderNodeObject<Node>;
  }

  interface MeshPhysicalMaterialProps {
    colorNode?: ShaderNodeObject<Node>;
    fragmentNode?: ShaderNodeObject<Node>;
    vertexNode?: ShaderNodeObject<Node>;
  }

  interface NodeMaterialProps {
    colorNode?: ShaderNodeObject<Node>;
    fragmentNode?: ShaderNodeObject<Node>;
    vertexNode?: ShaderNodeObject<Node>;
    side?: 0 | 1 | 2;
    transparent?: boolean;
    opacity?: number;
  }

  interface ThreeElements {
    nodeMaterial: NodeMaterialProps;
  }
}

// Re-export ShaderNodeObject from official types for convenience
export type { ShaderNodeObject };
