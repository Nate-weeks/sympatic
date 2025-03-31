import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    pTorus3: THREE.Mesh;
    pTorus2: THREE.Mesh;
    pTorus1: THREE.Mesh;
    FlagMesh: THREE.SkinnedMesh;
    FlagPole: THREE.Mesh;
    FlagJoint_1: THREE.Bone;
    FlagJoint_2: THREE.Bone;
    FlagJoint_3: THREE.Bone;
    FlagJoint_4: THREE.Bone;
    FlagJoint_5: THREE.Bone;
    FlagJoint_6: THREE.Bone;
    FlagJoint_7: THREE.Bone;
    FlagJoint_8: THREE.Bone;
    FlagJoint_9: THREE.Bone;
    FlagJoint_10: THREE.Bone;
    FlagJoint_11: THREE.Bone;
    FlagJoint_12: THREE.Bone;
    FlagJoint_13: THREE.Bone;
    FlagJoint_14: THREE.Bone;
    FlagJoint_15: THREE.Bone;
    FlagJoint_16: THREE.Bone;
    FlagJoint_17: THREE.Bone;
    FlagJoint_18: THREE.Bone;
    FlagJoint_19: THREE.Bone;
    FlagJoint_20: THREE.Bone;
    FlagJoint_21: THREE.Bone;
    FlagJoint_22: THREE.Bone;
    FlagJoint_23: THREE.Bone;
    FlagJoint_24: THREE.Bone;
    FlagJoint_25: THREE.Bone;
    FlagJoint_26: THREE.Bone;
    FlagJoint_27: THREE.Bone;
    FlagJoint_28: THREE.Bone;
    FlagJoint_29: THREE.Bone;
    FlagJoint_30: THREE.Bone;
    FlagJoint_31: THREE.Bone;
    FlagJoint_32: THREE.Bone;
    FlagJoint_33: THREE.Bone;
    FlagJoint_34: THREE.Bone;
    FlagJoint_35: THREE.Bone;
    FlagJoint_36: THREE.Bone;
    FlagJoint_37: THREE.Bone;
    FlagJoint_38: THREE.Bone;
    FlagJoint_39: THREE.Bone;
    FlagJoint_40: THREE.Bone;
    FlagJoint_41: THREE.Bone;
    FlagJoint_42: THREE.Bone;
    FlagJoint_43: THREE.Bone;
    FlagJoint_44: THREE.Bone;
    FlagJoint_45: THREE.Bone;
    FlagJoint_46: THREE.Bone;
    FlagJoint_47: THREE.Bone;
    FlagJoint_48: THREE.Bone;
    FlagJoint_49: THREE.Bone;
    FlagJoint_50: THREE.Bone;
    FlagJoint_51: THREE.Bone;
    FlagJoint_52: THREE.Bone;
    FlagJoint_53: THREE.Bone;
    FlagJoint_54: THREE.Bone;
    FlagJoint_55: THREE.Bone;
    FlagJoint_56: THREE.Bone;
    FlagJoint_57: THREE.Bone;
    FlagJoint_58: THREE.Bone;
    FlagJoint_59: THREE.Bone;
    FlagJoint_60: THREE.Bone;
    FlagJoint_61: THREE.Bone;
    FlagJoint_62: THREE.Bone;
    FlagJoint_63: THREE.Bone;
    FlagJoint_64: THREE.Bone;
    FlagJoint_65: THREE.Bone;
    FlagJoint_66: THREE.Bone;
    FlagJoint_67: THREE.Bone;
    FlagJoint_68: THREE.Bone;
    FlagJoint_69: THREE.Bone;
    FlagJoint_70: THREE.Bone;
    FlagJoint_71: THREE.Bone;
    FlagJoint_72: THREE.Bone;
    FlagJoint_73: THREE.Bone;
    FlagJoint_74: THREE.Bone;
    FlagJoint_75: THREE.Bone;
    FlagJoint_76: THREE.Bone;
    FlagJoint_77: THREE.Bone;
    FlagJoint_78: THREE.Bone;
    FlagJoint_79: THREE.Bone;
    FlagJoint_80: THREE.Bone;
    FlagJoint_81: THREE.Bone;
    FlagJoint_82: THREE.Bone;
    FlagJoint_83: THREE.Bone;
    FlagJoint_84: THREE.Bone;
    FlagJoint_85: THREE.Bone;
    FlagJoint_86: THREE.Bone;
    FlagJoint_87: THREE.Bone;
    FlagJoint_88: THREE.Bone;
    FlagJoint_89: THREE.Bone;
    FlagJoint_90: THREE.Bone;
    FlagJoint_91: THREE.Bone;
    FlagJoint_92: THREE.Bone;
    FlagJoint_93: THREE.Bone;
    FlagJoint_94: THREE.Bone;
    FlagJoint_95: THREE.Bone;
    FlagJoint_96: THREE.Bone;
    FlagJoint_97: THREE.Bone;
    FlagJoint_98: THREE.Bone;
    FlagJoint_99: THREE.Bone;
    FlagJoint_100: THREE.Bone;
    FlagJoint_101: THREE.Bone;
    FlagJoint_102: THREE.Bone;
    FlagJoint_103: THREE.Bone;
    FlagJoint_104: THREE.Bone;
    FlagJoint_105: THREE.Bone;
    FlagJoint_106: THREE.Bone;
    FlagJoint_107: THREE.Bone;
    FlagJoint_108: THREE.Bone;
    FlagJoint_109: THREE.Bone;
    FlagJoint_110: THREE.Bone;
    FlagJoint_111: THREE.Bone;
    FlagJoint_112: THREE.Bone;
    FlagJoint_113: THREE.Bone;
    FlagJoint_114: THREE.Bone;
    FlagJoint_115: THREE.Bone;
    FlagJoint_116: THREE.Bone;
    FlagJoint_117: THREE.Bone;
    FlagJoint_118: THREE.Bone;
    FlagJoint_119: THREE.Bone;
    FlagJoint_120: THREE.Bone;
    FlagJoint_121: THREE.Bone;
    FlagJoint_122: THREE.Bone;
    FlagJoint_123: THREE.Bone;
    FlagJoint_124: THREE.Bone;
    FlagJoint_125: THREE.Bone;
    FlagJoint_126: THREE.Bone;
    FlagJoint_127: THREE.Bone;
    FlagJoint_128: THREE.Bone;
    FlagJoint_129: THREE.Bone;
    FlagJoint_130: THREE.Bone;
    FlagJoint_131: THREE.Bone;
    FlagJoint_132: THREE.Bone;
    FlagJoint_133: THREE.Bone;
    FlagJoint_134: THREE.Bone;
    FlagJoint_135: THREE.Bone;
    FlagJoint_136: THREE.Bone;
    FlagJoint_137: THREE.Bone;
    FlagJoint_138: THREE.Bone;
    FlagJoint_139: THREE.Bone;
    FlagJoint_140: THREE.Bone;
    FlagJoint_141: THREE.Bone;
    FlagJoint_142: THREE.Bone;
    FlagJoint_143: THREE.Bone;
    FlagJoint_144: THREE.Bone;
    FlagJoint_145: THREE.Bone;
    FlagJoint_146: THREE.Bone;
    FlagJoint_147: THREE.Bone;
    FlagJoint_148: THREE.Bone;
    FlagJoint_149: THREE.Bone;
    FlagJoint_150: THREE.Bone;
    FlagJoint_151: THREE.Bone;
    FlagJoint_152: THREE.Bone;
    FlagJoint_153: THREE.Bone;
    FlagJoint_154: THREE.Bone;
    FlagJoint_155: THREE.Bone;
    FlagJoint_156: THREE.Bone;
    FlagJoint_157: THREE.Bone;
    FlagJoint_158: THREE.Bone;
    FlagJoint_159: THREE.Bone;
    FlagJoint_160: THREE.Bone;
    FlagJoint_161: THREE.Bone;
    FlagJoint_162: THREE.Bone;
    FlagJoint_163: THREE.Bone;
    FlagJoint_164: THREE.Bone;
    FlagJoint_165: THREE.Bone;
    FlagJoint_166: THREE.Bone;
    FlagJoint_167: THREE.Bone;
    FlagJoint_168: THREE.Bone;
    FlagJoint_169: THREE.Bone;
    FlagJoint_170: THREE.Bone;
    FlagJoint_171: THREE.Bone;
    FlagJoint_172: THREE.Bone;
    FlagJoint_173: THREE.Bone;
    FlagJoint_174: THREE.Bone;
    FlagJoint_175: THREE.Bone;
    FlagJoint_176: THREE.Bone;
    FlagJoint_177: THREE.Bone;
    FlagJoint_178: THREE.Bone;
    FlagJoint_179: THREE.Bone;
    FlagJoint_180: THREE.Bone;
    FlagJoint_181: THREE.Bone;
    FlagJoint_182: THREE.Bone;
    FlagJoint_183: THREE.Bone;
    FlagJoint_184: THREE.Bone;
    FlagJoint_185: THREE.Bone;
    FlagJoint_186: THREE.Bone;
    FlagJoint_187: THREE.Bone;
    FlagJoint_188: THREE.Bone;
    FlagJoint_189: THREE.Bone;
    FlagJoint_190: THREE.Bone;
    FlagJoint_191: THREE.Bone;
    FlagJoint_192: THREE.Bone;
    FlagJoint_193: THREE.Bone;
    FlagJoint_194: THREE.Bone;
    FlagJoint_195: THREE.Bone;
    FlagJoint_196: THREE.Bone;
    FlagJoint_197: THREE.Bone;
    FlagJoint_198: THREE.Bone;
    FlagJoint_199: THREE.Bone;
    FlagJoint_200: THREE.Bone;
    FlagJoint_201: THREE.Bone;
    FlagJoint_202: THREE.Bone;
    FlagJoint_203: THREE.Bone;
    FlagJoint_204: THREE.Bone;
    FlagJoint_205: THREE.Bone;
    FlagJoint_206: THREE.Bone;
    FlagJoint_207: THREE.Bone;
    FlagJoint_208: THREE.Bone;
    FlagJoint_209: THREE.Bone;
    FlagJoint_210: THREE.Bone;
    FlagJoint_211: THREE.Bone;
    FlagJoint_212: THREE.Bone;
    FlagJoint_213: THREE.Bone;
    FlagJoint_214: THREE.Bone;
    FlagJoint_215: THREE.Bone;
    FlagJoint_216: THREE.Bone;
    FlagJoint_217: THREE.Bone;
    FlagJoint_218: THREE.Bone;
    FlagJoint_219: THREE.Bone;
    FlagJoint_220: THREE.Bone;
    FlagJoint_221: THREE.Bone;
    FlagJoint_222: THREE.Bone;
    FlagJoint_223: THREE.Bone;
    FlagJoint_224: THREE.Bone;
    FlagJoint_225: THREE.Bone;
    FlagJoint_226: THREE.Bone;
    FlagJoint_227: THREE.Bone;
    FlagJoint_228: THREE.Bone;
    FlagJoint_229: THREE.Bone;
    FlagJoint_230: THREE.Bone;
    FlagJoint_231: THREE.Bone;
  };
  materials: {
    lambert1: THREE.MeshStandardMaterial;
    Flag: THREE.MeshStandardMaterial;
    FlagPole1: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "Joints|Take 001|BaseLayer";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export function Flag(/* props */) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    `/models/flag.glb`
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Joints|Take 001|BaseLayer"]?.play();
  }, []);

  const woodMesh = useRef<THREE.Mesh>(null);
  const flagMesh = useRef<THREE.SkinnedMesh>(null);

  return (
    <group
      ref={group}
      position={innerWidth < 600 ? [0.58, -0.5, 2.1] : [1.58, 0, 2.1]}
      scale={ 0.1 }
      name="flag"
      dispose={null}
    >
      <group name="Scene">
        <group name="FlagRig" rotation={[Math.PI / 2, 0, 0]} scale={0.546}>
          <group
            name="Joints"
            position={[-2.842, 0.038, -5.84]}
            rotation={[0.031, -0.496, 0.035]}
          >
            <primitive object={nodes.FlagJoint_1} />
            <primitive object={nodes.FlagJoint_2} />
            <primitive object={nodes.FlagJoint_3} />
            <primitive object={nodes.FlagJoint_4} />
            <primitive object={nodes.FlagJoint_5} />
            <primitive object={nodes.FlagJoint_6} />
            <primitive object={nodes.FlagJoint_7} />
            <primitive object={nodes.FlagJoint_8} />
            <primitive object={nodes.FlagJoint_9} />
            <primitive object={nodes.FlagJoint_10} />
            <primitive object={nodes.FlagJoint_11} />
            <primitive object={nodes.FlagJoint_12} />
            <primitive object={nodes.FlagJoint_13} />
            <primitive object={nodes.FlagJoint_14} />
            <primitive object={nodes.FlagJoint_15} />
            <primitive object={nodes.FlagJoint_16} />
            <primitive object={nodes.FlagJoint_17} />
            <primitive object={nodes.FlagJoint_18} />
            <primitive object={nodes.FlagJoint_19} />
            <primitive object={nodes.FlagJoint_20} />
            <primitive object={nodes.FlagJoint_21} />
            <primitive object={nodes.FlagJoint_22} />
            <primitive object={nodes.FlagJoint_23} />
            <primitive object={nodes.FlagJoint_24} />
            <primitive object={nodes.FlagJoint_25} />
            <primitive object={nodes.FlagJoint_26} />
            <primitive object={nodes.FlagJoint_27} />
            <primitive object={nodes.FlagJoint_28} />
            <primitive object={nodes.FlagJoint_29} />
            <primitive object={nodes.FlagJoint_30} />
            <primitive object={nodes.FlagJoint_31} />
            <primitive object={nodes.FlagJoint_32} />
            <primitive object={nodes.FlagJoint_33} />
            <primitive object={nodes.FlagJoint_34} />
            <primitive object={nodes.FlagJoint_35} />
            <primitive object={nodes.FlagJoint_36} />
            <primitive object={nodes.FlagJoint_37} />
            <primitive object={nodes.FlagJoint_38} />
            <primitive object={nodes.FlagJoint_39} />
            <primitive object={nodes.FlagJoint_40} />
            <primitive object={nodes.FlagJoint_41} />
            <primitive object={nodes.FlagJoint_42} />
            <primitive object={nodes.FlagJoint_43} />
            <primitive object={nodes.FlagJoint_44} />
            <primitive object={nodes.FlagJoint_45} />
            <primitive object={nodes.FlagJoint_46} />
            <primitive object={nodes.FlagJoint_47} />
            <primitive object={nodes.FlagJoint_48} />
            <primitive object={nodes.FlagJoint_49} />
            <primitive object={nodes.FlagJoint_50} />
            <primitive object={nodes.FlagJoint_51} />
            <primitive object={nodes.FlagJoint_52} />
            <primitive object={nodes.FlagJoint_53} />
            <primitive object={nodes.FlagJoint_54} />
            <primitive object={nodes.FlagJoint_55} />
            <primitive object={nodes.FlagJoint_56} />
            <primitive object={nodes.FlagJoint_57} />
            <primitive object={nodes.FlagJoint_58} />
            <primitive object={nodes.FlagJoint_59} />
            <primitive object={nodes.FlagJoint_60} />
            <primitive object={nodes.FlagJoint_61} />
            <primitive object={nodes.FlagJoint_62} />
            <primitive object={nodes.FlagJoint_63} />
            <primitive object={nodes.FlagJoint_64} />
            <primitive object={nodes.FlagJoint_65} />
            <primitive object={nodes.FlagJoint_66} />
            <primitive object={nodes.FlagJoint_67} />
            <primitive object={nodes.FlagJoint_68} />
            <primitive object={nodes.FlagJoint_69} />
            <primitive object={nodes.FlagJoint_70} />
            <primitive object={nodes.FlagJoint_71} />
            <primitive object={nodes.FlagJoint_72} />
            <primitive object={nodes.FlagJoint_73} />
            <primitive object={nodes.FlagJoint_74} />
            <primitive object={nodes.FlagJoint_75} />
            <primitive object={nodes.FlagJoint_76} />
            <primitive object={nodes.FlagJoint_77} />
            <primitive object={nodes.FlagJoint_78} />
            <primitive object={nodes.FlagJoint_79} />
            <primitive object={nodes.FlagJoint_80} />
            <primitive object={nodes.FlagJoint_81} />
            <primitive object={nodes.FlagJoint_82} />
            <primitive object={nodes.FlagJoint_83} />
            <primitive object={nodes.FlagJoint_84} />
            <primitive object={nodes.FlagJoint_85} />
            <primitive object={nodes.FlagJoint_86} />
            <primitive object={nodes.FlagJoint_87} />
            <primitive object={nodes.FlagJoint_88} />
            <primitive object={nodes.FlagJoint_89} />
            <primitive object={nodes.FlagJoint_90} />
            <primitive object={nodes.FlagJoint_91} />
            <primitive object={nodes.FlagJoint_92} />
            <primitive object={nodes.FlagJoint_93} />
            <primitive object={nodes.FlagJoint_94} />
            <primitive object={nodes.FlagJoint_95} />
            <primitive object={nodes.FlagJoint_96} />
            <primitive object={nodes.FlagJoint_97} />
            <primitive object={nodes.FlagJoint_98} />
            <primitive object={nodes.FlagJoint_99} />
            <primitive object={nodes.FlagJoint_100} />
            <primitive object={nodes.FlagJoint_101} />
            <primitive object={nodes.FlagJoint_102} />
            <primitive object={nodes.FlagJoint_103} />
            <primitive object={nodes.FlagJoint_104} />
            <primitive object={nodes.FlagJoint_105} />
            <primitive object={nodes.FlagJoint_106} />
            <primitive object={nodes.FlagJoint_107} />
            <primitive object={nodes.FlagJoint_108} />
            <primitive object={nodes.FlagJoint_109} />
            <primitive object={nodes.FlagJoint_110} />
            <primitive object={nodes.FlagJoint_111} />
            <primitive object={nodes.FlagJoint_112} />
            <primitive object={nodes.FlagJoint_113} />
            <primitive object={nodes.FlagJoint_114} />
            <primitive object={nodes.FlagJoint_115} />
            <primitive object={nodes.FlagJoint_116} />
            <primitive object={nodes.FlagJoint_117} />
            <primitive object={nodes.FlagJoint_118} />
            <primitive object={nodes.FlagJoint_119} />
            <primitive object={nodes.FlagJoint_120} />
            <primitive object={nodes.FlagJoint_121} />
            <primitive object={nodes.FlagJoint_122} />
            <primitive object={nodes.FlagJoint_123} />
            <primitive object={nodes.FlagJoint_124} />
            <primitive object={nodes.FlagJoint_125} />
            <primitive object={nodes.FlagJoint_126} />
            <primitive object={nodes.FlagJoint_127} />
            <primitive object={nodes.FlagJoint_128} />
            <primitive object={nodes.FlagJoint_129} />
            <primitive object={nodes.FlagJoint_130} />
            <primitive object={nodes.FlagJoint_131} />
            <primitive object={nodes.FlagJoint_132} />
            <primitive object={nodes.FlagJoint_133} />
            <primitive object={nodes.FlagJoint_134} />
            <primitive object={nodes.FlagJoint_135} />
            <primitive object={nodes.FlagJoint_136} />
            <primitive object={nodes.FlagJoint_137} />
            <primitive object={nodes.FlagJoint_138} />
            <primitive object={nodes.FlagJoint_139} />
            <primitive object={nodes.FlagJoint_140} />
            <primitive object={nodes.FlagJoint_141} />
            <primitive object={nodes.FlagJoint_142} />
            <primitive object={nodes.FlagJoint_143} />
            <primitive object={nodes.FlagJoint_144} />
            <primitive object={nodes.FlagJoint_145} />
            <primitive object={nodes.FlagJoint_146} />
            <primitive object={nodes.FlagJoint_147} />
            <primitive object={nodes.FlagJoint_148} />
            <primitive object={nodes.FlagJoint_149} />
            <primitive object={nodes.FlagJoint_150} />
            <primitive object={nodes.FlagJoint_151} />
            <primitive object={nodes.FlagJoint_152} />
            <primitive object={nodes.FlagJoint_153} />
            <primitive object={nodes.FlagJoint_154} />
            <primitive object={nodes.FlagJoint_155} />
            <primitive object={nodes.FlagJoint_156} />
            <primitive object={nodes.FlagJoint_157} />
            <primitive object={nodes.FlagJoint_158} />
            <primitive object={nodes.FlagJoint_159} />
            <primitive object={nodes.FlagJoint_160} />
            <primitive object={nodes.FlagJoint_161} />
            <primitive object={nodes.FlagJoint_162} />
            <primitive object={nodes.FlagJoint_163} />
            <primitive object={nodes.FlagJoint_164} />
            <primitive object={nodes.FlagJoint_165} />
            <primitive object={nodes.FlagJoint_166} />
            <primitive object={nodes.FlagJoint_167} />
            <primitive object={nodes.FlagJoint_168} />
            <primitive object={nodes.FlagJoint_169} />
            <primitive object={nodes.FlagJoint_170} />
            <primitive object={nodes.FlagJoint_171} />
            <primitive object={nodes.FlagJoint_172} />
            <primitive object={nodes.FlagJoint_173} />
            <primitive object={nodes.FlagJoint_174} />
            <primitive object={nodes.FlagJoint_175} />
            <primitive object={nodes.FlagJoint_176} />
            <primitive object={nodes.FlagJoint_177} />
            <primitive object={nodes.FlagJoint_178} />
            <primitive object={nodes.FlagJoint_179} />
            <primitive object={nodes.FlagJoint_180} />
            <primitive object={nodes.FlagJoint_181} />
            <primitive object={nodes.FlagJoint_182} />
            <primitive object={nodes.FlagJoint_183} />
            <primitive object={nodes.FlagJoint_184} />
            <primitive object={nodes.FlagJoint_185} />
            <primitive object={nodes.FlagJoint_186} />
            <primitive object={nodes.FlagJoint_187} />
            <primitive object={nodes.FlagJoint_188} />
            <primitive object={nodes.FlagJoint_189} />
            <primitive object={nodes.FlagJoint_190} />
            <primitive object={nodes.FlagJoint_191} />
            <primitive object={nodes.FlagJoint_192} />
            <primitive object={nodes.FlagJoint_193} />
            <primitive object={nodes.FlagJoint_194} />
            <primitive object={nodes.FlagJoint_195} />
            <primitive object={nodes.FlagJoint_196} />
            <primitive object={nodes.FlagJoint_197} />
            <primitive object={nodes.FlagJoint_198} />
            <primitive object={nodes.FlagJoint_199} />
            <primitive object={nodes.FlagJoint_200} />
            <primitive object={nodes.FlagJoint_201} />
            <primitive object={nodes.FlagJoint_202} />
            <primitive object={nodes.FlagJoint_203} />
            <primitive object={nodes.FlagJoint_204} />
            <primitive object={nodes.FlagJoint_205} />
            <primitive object={nodes.FlagJoint_206} />
            <primitive object={nodes.FlagJoint_207} />
            <primitive object={nodes.FlagJoint_208} />
            <primitive object={nodes.FlagJoint_209} />
            <primitive object={nodes.FlagJoint_210} />
            <primitive object={nodes.FlagJoint_211} />
            <primitive object={nodes.FlagJoint_212} />
            <primitive object={nodes.FlagJoint_213} />
            <primitive object={nodes.FlagJoint_214} />
            <primitive object={nodes.FlagJoint_215} />
            <primitive object={nodes.FlagJoint_216} />
            <primitive object={nodes.FlagJoint_217} />
            <primitive object={nodes.FlagJoint_218} />
            <primitive object={nodes.FlagJoint_219} />
            <primitive object={nodes.FlagJoint_220} />
            <primitive object={nodes.FlagJoint_221} />
            <primitive object={nodes.FlagJoint_222} />
            <primitive object={nodes.FlagJoint_223} />
            <primitive object={nodes.FlagJoint_224} />
            <primitive object={nodes.FlagJoint_225} />
            <primitive object={nodes.FlagJoint_226} />
            <primitive object={nodes.FlagJoint_227} />
            <primitive object={nodes.FlagJoint_228} />
            <primitive object={nodes.FlagJoint_229} />
            <primitive object={nodes.FlagJoint_230} />
            <primitive object={nodes.FlagJoint_231} />
            <skinnedMesh
              name="FlagMesh"
              ref={flagMesh}
              geometry={nodes.FlagMesh.geometry}
              material={materials.Flag}
              skeleton={nodes.FlagMesh.skeleton}
              material-transparent={true}
              material-opacity={1}
            />
          </group>
          <mesh
            ref={woodMesh}
            name="FlagPole"
            geometry={nodes.FlagPole.geometry}
            material={materials.FlagPole1}
            material-transparent={true}
            material-opacity={1}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload( `/models/flag.glb`);
