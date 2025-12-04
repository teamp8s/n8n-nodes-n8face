const path = require('path');
const fs = require('fs');
const { task, src, dest, series } = require('gulp');

task('build:icons', copyIcons);
task('build:package', copyPackage);
task('build:index', copyIndex);

function copyIcons() {
	const nodeSource = path.resolve('nodes', '**', '*.{png,svg}');
	const nodeDestination = path.resolve('dist', 'nodes');

	src(nodeSource).pipe(dest(nodeDestination));

	const credSource = path.resolve('credentials', '**', '*.{png,svg}');
	const credDestination = path.resolve('dist', 'credentials');

	src(credSource).pipe(dest(credDestination));

	const iconsSource = path.resolve('icons', '**', '*.{png,svg}');
	const iconsDestination = path.resolve('dist', 'icons');

	return src(iconsSource).pipe(dest(iconsDestination));
}

function copyPackage(done) {
	const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
	const distPackageJson = { ...packageJson };
	distPackageJson.n8n = {
		...packageJson.n8n,
		credentials: packageJson.n8n.credentials.map(p => p.replace('dist/', '')),
		nodes: packageJson.n8n.nodes.map(p => p.replace('dist/', '')),
	};
	fs.writeFileSync('dist/package.json', JSON.stringify(distPackageJson, null, 4));
	done();
}

function copyIndex(done) {
	const indexContent = `module.exports = {
	N8face: require('./nodes/N8face/N8face.node.js'),
};
`;
	fs.writeFileSync('dist/index.js', indexContent);
	done();
}

task('build:post', series('build:package', 'build:index'));
