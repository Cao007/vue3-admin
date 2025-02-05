// 这里是通俗的解释 详情请前往官方文档查阅
module.exports = {
	ignores: [(commit) => commit.includes('init')],
	extends: ['@commitlint/config-conventional'],
	rules: {
		// 信息以空格开头
		'body-leading-blank': [2, 'always'],
		'footer-leading-blank': [2, 'always'],
		// 信息最大长度
		'header-max-length': [2, 'always', 108],
		// 信息不能未空
		'subject-empty': [2, 'never'],
		// 信息类型不能未空
		'type-empty': [2, 'never'],
		// 提交信息的类型 下文有介绍
		'type-enum': [
			2,
			'always',
			[
				'feat', // 新功能
				'fix', // 修复
				'perf', // 性能优化
				'style', // 样式
				'docs', // 文档
				'test', // 测试
				'refactor', // 重构
				'build', // 构建
				'ci', // 持续集成
				'chore', // 构建/依赖/工具
				'revert', // 回滚
				'wip', // 工作中
				'workflow', // 工作流
				'types', // 类型定义
				'release', // 发布
				'temp' // 临时
			]
		]
	}
};
