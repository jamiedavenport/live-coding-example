import { WebContainer, type FileSystemTree } from '@webcontainer/api';

export async function loadWebcontainer(fileSystem: FileSystemTree) {
	const webcontainer = await WebContainer.boot();

	await webcontainer.mount(fileSystem);

	const installProcess = await webcontainer.spawn('npm', ['install']);
	await installProcess.exit;

	return webcontainer;
}
