import Project from "./Project"
import StrategyQA from '../artifacts/strategyqa.png'
import Grasping from '../artifacts/grasping.png'
import Ointment from '../artifacts/ointment.png'
import React from 'react';

export const Projects = () => {
    return (
        <div className="projects section">
            <ul>
                <li><Project title="Generalized Robotic Grasping via Grasp-Pose Supervision, Object-Aware and Vision-Conditioned Policy Learning"
                    img={Grasping}
                    description="Developed a general-purpose grasping system that achieved 82% success on 2,000+ diverse objects using reinforcement learning algorithms and advanced tools like Isaac Sim, IsaacLab, and PyTorch."
                    site="https://drive.google.com/file/d/1RG11sPxf75W21U4LsCgbxnpm--7v0MD7/view?usp=sharing"
                >
                </Project></li>
                <li><Project title="Ointment Care Robot for Limited Mobility Users"
                    img={Ointment}
                    description="Developed an ointment application system for users with limited mobility using the Stretch RE2 Robot. Conducted user research and designed and implemented system end-to-end using Python, ROS, and JavaScript."
                    site="https://www.youtube.com/watch?v=cvXvkXMHmvc"
                >
                </Project></li>
                <li><Project title="StrategyQA: Implicit Reasoning in Large Language Models"
                    img={StrategyQA}
                    description="Worked with a small team to build a system that answers complex reasoning questions using ML/NLP skills, advanced AI models like BERT and T5, and tools like PyTorch and HuggingFace."
                    site="https://drive.google.com/file/d/1UxY-bduTPfeiK5a4WjsLw3FGDEEslya5/view?usp=drive_link"
                >
                </Project></li>
            </ul>
        </div>
    )
}
