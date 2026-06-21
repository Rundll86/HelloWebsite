import {
	createComponent,
	styleSet,
	tree,
} from "nine-9";
import SectionCard from "./SectionCard.js";
import TableRow from "./TableRow.js";
import PipeStepItem from "./PipeStepItem.js";
import PipeStepItem2 from "./PipeStepItem2.js";
import arch from "../arch.txt?raw";

// ========== 全局样式 ==========
const pageStyle = styleSet("body")
	.margin("0")
	.padding("0")
	.fontFamily('"Segoe UI", system-ui, sans-serif')
	.backgroundColor("#0d1117")
	.color("#c9d1d9")
	.lineHeight("1.6");

const heroStyle = styleSet(".hero")
	.textAlign("center")
	.padding("80px 20px 60px")
	.background("linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)")
	.borderBottom("2px solid #30363d");

const heroTitle = styleSet(".hero-title")
	.fontSize("3em")
	.fontWeight("800")
	.color("#58a6ff")
	.margin("0 0 10px")
	.letterSpacing("-0.5px");

const heroTagline = styleSet(".hero-tagline")
	.fontSize("1.2em")
	.color("#8b949e")
	.margin("0 0 20px");

const badgeStyle = styleSet(".badge")
	.display("inline-block")
	.padding("4px 12px")
	.borderRadius("20px")
	.fontSize("0.85em")
	.margin("4px")
	.backgroundColor("#21262d")
	.border("1px solid #30363d")
	.color("#c9d1d9");

const sectionStyle = styleSet(".section")
	.maxWidth("900px")
	.margin("0 auto")
	.padding("60px 20px");

const sectionTitle = styleSet(".section-title")
	.fontSize("1.8em")
	.fontWeight("700")
	.color("#f0f6fc")
	.margin("0 0 12px")
	.paddingBottom("8px")
	.borderBottom("1px solid #30363d");

const sectionDesc = styleSet(".section-desc")
	.fontSize("1em")
	.color("#8b949e")
	.margin("0 0 30px");

const cardGrid = styleSet(".card-grid")
	.display("grid")
	.gridTemplateColumns("repeat(4, 1fr)")
	.gap("16px")
	.margin("20px 0");

const cardStyle = styleSet(".card")
	.padding("24px")
	.borderRadius("8px")
	.backgroundColor("#161b22")
	.border("1px solid #30363d")
	.transition("border-color 0.2s");

const cardIcon = styleSet(".card-icon")
	.fontSize("1.8em")
	.marginBottom("10px");

const cardTitle = styleSet(".card-title")
	.fontSize("1.1em")
	.fontWeight("600")
	.color("#f0f6fc")
	.margin("0 0 8px");

const cardText = styleSet(".card-text")
	.fontSize("0.9em")
	.color("#8b949e")
	.margin("0");

const archBox = styleSet(".arch-box")
	.padding("20px 24px")
	.backgroundColor("#0d1117")
	.borderRadius("8px")
	.border("1px solid #30363d")
	.overflowX("auto")
	.fontFamily("'Cascadia Code', 'Fira Code', 'Consolas', monospace")
	.fontSize("0.78em")
	.lineHeight("1.5")
	.color("#c9d1d9");

const tableStyle = styleSet(".module-table")
	.width("100%")
	.borderCollapse("collapse")
	.fontSize("0.88em")
	.margin("20px 0");

const tableHeader = styleSet(".module-table th")
	.textAlign("left")
	.padding("10px 14px")
	.backgroundColor("#21262d")
	.borderBottom("2px solid #30363d")
	.color("#f0f6fc")
	.fontWeight("600")
	.whiteSpace("nowrap");

const tableCell = styleSet(".module-table td")
	.padding("10px 14px")
	.borderBottom("1px solid #21262d")
	.color("#c9d1d9");

const pipeStyle = styleSet(".pipe")
	.display("flex")
	.gap("12px")
	.overflowX("auto")
	.padding("16px 0");

const pipeStep = styleSet(".pipe-step")
	.flex("1")
	.minWidth("110px")
	.padding("14px")
	.textAlign("center")
	.borderRadius("6px")
	.backgroundColor("#161b22")
	.border("1px solid #30363d")
	.fontSize("0.82em")
	.color("#8b949e");

const pipeNum = styleSet(".pipe-num")
	.display("block")
	.fontSize("1.5em")
	.fontWeight("700")
	.color("#58a6ff")
	.marginBottom("4px");

const codeBlock = styleSet(".code-block")
	.padding("20px 24px")
	.backgroundColor("#0d1117")
	.borderRadius("8px")
	.border("1px solid #30363d")
	.fontFamily("'Cascadia Code', 'Fira Code', 'Consolas', monospace")
	.fontSize("0.85em")
	.color("#79c0ff")
	.overflowX("auto")
	.whiteSpace("pre");

const footerStyle = styleSet(".footer")
	.textAlign("center")
	.padding("30px 20px")
	.borderTop("1px solid #30363d")
	.color("#484f58")
	.fontSize("0.82em");

const linkStyle = styleSet(".link")
	.color("#58a6ff")
	.textDecoration("none");

const highlighter = styleSet(".hl")
	.color("#ff7b72")
	.fontWeight("600");

// ========== 激活所有全局样式 ==========
pageStyle.apply();
heroStyle.apply();
heroTitle.apply();
heroTagline.apply();
badgeStyle.apply();
sectionStyle.apply();
sectionTitle.apply();
sectionDesc.apply();
cardGrid.apply();
cardStyle.apply();
cardIcon.apply();
cardTitle.apply();
cardText.apply();
archBox.apply();
tableStyle.apply();
tableHeader.apply();
tableCell.apply();
pipeStyle.apply();
pipeStep.apply();
pipeNum.apply();
codeBlock.apply();
footerStyle.apply();
linkStyle.apply();
highlighter.apply();

// ========== Page 组件 ==========
export default createComponent(
	{
		styles: [],
		slots: [],
		events: [],
	},
	() => {
		return tree("div").append(
			// ---- Hero ----
			tree("div")
				.class("hero")
				.append(
					tree("h1").class("hero-title").append("Super-HelloWorld"),
					tree("p")
						.class("hero-tagline")
						.append(
							"企业级 Hello World 打印基础设施 — 跨平台 · 跨设备 · 跨语言 · 99.999% 可用性"
						),
					tree("div").append(
						tree("span").class("badge").append("Python 3.10+"),
						tree("span").class("badge").append("Docker"),
						tree("span").class("badge").append("Kubernetes"),
						tree("span").class("badge").append("MIT License"),
						tree("span").class("badge").append("90%+ Coverage"),
						tree("span").class("badge").append("86 Tests Passed")
					)
				),

			// ---- 项目愿景 ----
			tree("div")
				.class("section")
				.append(
					tree("h2").class("section-title").append("项目愿景"),
					tree("p")
						.class("section-desc")
						.append(
							"构建一个跨平台、跨设备、跨语言的企业级 Hello World 打印基础设施。确保在任何设备、任何平台、任何网络条件下，系统都能以 ",
							tree("span").class("hl").append("99.999%"),
							" 的可用性稳定输出 Hello World。"
						),
					tree("div")
						.class("card-grid")
						.append(
							SectionCard({
								icon: "🔒",
								title: "五九可靠性",
								desc: "年停机时间 < 5 分钟，内置恶意打印检测、全角字符注入防御、缓冲区溢出保护"
							}),
							SectionCard({
								icon: "🖥️",
								title: "多设备输出",
								desc: "支持 Console / File / Network / Cloud 四种输出设备，设备支持热插拔"
							}),
							SectionCard({
								icon: "🌐",
								title: "跨语言转译",
								desc: "将 Hello World 转译为 JavaScript / Java / C++ / Rust / WASM 五种目标语言"
							}),
							SectionCard({
								icon: "📊",
								title: "全栈可观测",
								desc: "结构化日志 + Prometheus 指标 + 分布式追踪 + 云端日志上传"
							})
						)
				),

			// ---- 架构设计 ----
			tree("div")
				.class("section")
				.append(
					tree("h2").class("section-title").append("架构设计"),
					tree("p")
						.class("section-desc")
						.append(
							"采用 4 层分层架构 + CLI 控制层 + 云服务层，严格遵循依赖倒置原则。"
						),
					tree("pre")
						.class("arch-box")
						.append(arch)
				),

			// ---- 模块职责矩阵 ----
			tree("div")
				.class("section")
				.append(
					tree("h2").class("section-title").append("模块职责矩阵"),
					tree("div")
						.use(styleSet().overflowX("auto"))
						.append(
							tree("table")
								.class("module-table")
								.append(
									tree("tr").append(
										tree("th").append("模块"),
										tree("th").append("层级"),
										tree("th").append("职责"),
										tree("th").append("设计模式")
									),
									TableRow({ module: "CharacterReader", layer: "设备层", duty: "字符序列读取/解析", pattern: "—" }),
									TableRow({ module: "DeviceManager", layer: "设备层", duty: "设备注册/发现/生命周期", pattern: "工厂+注册表" }),
									TableRow({ module: "ConsoleDevice", layer: "设备层", duty: "控制台输出", pattern: "抽象工厂" }),
									TableRow({ module: "FileDevice", layer: "设备层", duty: "文件输出", pattern: "抽象工厂" }),
									TableRow({ module: "BufferStack", layer: "转接层", duty: "字符缓冲区栈 (双端队列)", pattern: "—" }),
									TableRow({ module: "StreamAdapter", layer: "转接层", duty: "编码/流转换", pattern: "策略模式" }),
									TableRow({ module: "ProtocolAdapter", layer: "转接层", duty: "IR-设备协议转换", pattern: "适配器" }),
									TableRow({ module: "OutputStream", layer: "处理层", duty: "输出字符流调度", pattern: "观察者模式" }),
									TableRow({ module: "Renderer", layer: "处理层", duty: "字符渲染引擎", pattern: "—" }),
									TableRow({ module: "Scheduler", layer: "处理层", duty: "Cron 定时调度", pattern: "—" }),
									TableRow({ module: "SecurityMonitor", layer: "处理层", duty: "恶意打印检测", pattern: "责任链模式" }),
									TableRow({ module: "IRTranspiler", layer: "处理层", duty: "多语言 IR 转换", pattern: "策略模式" }),
									TableRow({ module: "LogUploader", layer: "云服务层", duty: "日志云端存储", pattern: "—" }),
									TableRow({ module: "CLI", layer: "控制层", duty: "命令行接口", pattern: "命令模式" })
								)
						)
				),

			// ---- CI/CD 流水线 ----
			tree("div")
				.class("section")
				.append(
					tree("h2").class("section-title").append("CI/CD 流水线"),
					tree("p")
						.class("section-desc")
						.append("7 阶段自动化流水线，从代码提交到生产部署全自动。"),
					tree("div")
						.class("pipe")
						.append(
							PipeStepItem({ num: "1", label: "Lint & Format\nRuff + Black + MyPy" }),
							PipeStepItem({ num: "2", label: "Unit Tests\npytest ≥ 90%" }),
							PipeStepItem({ num: "3", label: "Security\nBandit + Trivy" }),
							PipeStepItem({ num: "4", label: "Build\nDocker Multi-stage" }),
							PipeStepItem({ num: "5", label: "Integration\ndocker-compose" }),
							PipeStepItem({ num: "6", label: "IR Validation\n5 语言目标校验" }),
							PipeStepItem({ num: "7", label: "Push Artifacts\nRegistry + PyPI" })
						),
					tree("div").use(styleSet().marginTop("24px")),
					tree("div")
						.class("pipe")
						.append(
							PipeStepItem2({ label: "Dev Deploy", color: "#58a6ff", type: "自动" }),
							PipeStepItem2({ label: "Staging", color: "#d2a8ff", type: "自动" }),
							PipeStepItem2({ label: "Canary 10%", color: "#ffa657", type: "自动" }),
							PipeStepItem2({ label: "Smoke Test", color: "#ff7b72", type: "自动" }),
							PipeStepItem2({ label: "Full Rollout", color: "#3fb950", type: "手动审批" }),
							PipeStepItem2({ label: "Post-deploy", color: "#8b949e", type: "自动" })
						),
					tree("p")
						.use(styleSet().marginTop("8px").fontSize("0.8em").color("#484f58"))
						.append("↑ CI Pipeline (GitHub Actions) · ↓ CD Pipeline (ArgoCD / Flux)")
				),

			// ---- 快速开始 ----
			tree("div")
				.class("section")
				.append(
					tree("h2").class("section-title").append("快速开始"),
					tree("pre")
						.class("code-block")
						.append(
							"# 克隆仓库\ngit clone https://github.com/your-org/super-helloworld.git\ncd super-helloworld\n\n# 安装依赖\npip install -r requirements.txt\n\n# 运行\npython -m src.main\n\n# CLI 模式 (彩色输出)\npython -m src.cli print --style colored\n\n# 指定设备输出\npython -m src.cli print --device file --output hello.txt\n\n# 运行测试\npytest tests/ -v\n\n# Docker 部署\ndocker-compose up -d"
						)
				),

			// ---- Footer ----
			tree("div")
				.class("footer")
				.append(
					tree("p").append(
						"Super-HelloWorld © 2026 · Enterprise Architecture Team · ",
						tree("span").append("MIT License · 用意念控制未来")
					)
				)
		);
	}
);


