import { Plugin } from "obsidian";

export default class AwesomeArrow extends Plugin {
	async onload() {
		this.registerEvent(
			this.app.workspace.on("editor-change", (editor) => {
				const cursor = editor.getCursor();
				const line = editor.getLine(cursor.line);

				if (line.includes("-->")) {
					const updatedLine = line.replace(/-->/g, "→");
					editor.setLine(cursor.line, updatedLine);
				}

				if (line.includes("==>")) {
					const updatedLine = line.replace(/==>/g, "⇒");
					editor.setLine(cursor.line, updatedLine);
				}

				if (line.includes("<=>")) {
					const updatedLine = line.replace(/<=>/g, "⇔");
					editor.setLine(cursor.line, updatedLine);
				}
			})
		);
	}

	onunload() {}
}
