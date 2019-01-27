import fs from "fs"

import ejs from "ejs"

export const renderView = (
  view: string,
  data: Record<string, string>,
): string => ejs.render(view, data)

export const renderViewOnFile = async (
  filePath: string,
  data: Record<string, string>,
): Promise<void> => {
  const fileContents = fs.readFileSync(filePath, "utf8")
  const view = await renderView(fileContents, data)
  fs.writeFileSync(filePath, view)
}
