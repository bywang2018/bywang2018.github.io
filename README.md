# Academic Homepage

这是一个可直接部署到 GitHub Pages 的静态学术主页模板。它不需要安装前端框架，不需要构建步骤，解压后修改内容、预览、上传即可。

## 文件说明

- `index.html`: 页面入口，不常改。
- `assets/content.js`: 主要填写文件。姓名、照片、简介、论文、新闻、课程、联系方式都在这里。
- `assets/style.css`: 页面样式，不填内容时不用改。
- `assets/main.js`: 小交互脚本，不常改。
- `assets/profile-placeholder.svg`: 默认头像占位图。
- `assets/PUT_YOUR_PHOTO_HERE.txt`: 照片放置说明。
- `.nojekyll`: 告诉 GitHub Pages 原样发布这些静态文件。
- `CONTENT_TEMPLATE.md`: 内容填写清单。

## 第一步：填写个人内容

打开这个文件：

```text
assets/content.js
```

按文件里的 `TODO` 分区填写。最常改的是：

```js
profile: {
  name: "Your Name",
  title: "Researcher / PhD Candidate / Professor",
  affiliation: "Your Department, Your University",
  photo: "assets/profile-placeholder.svg",
  summary: "I work on ...",
  links: [...]
}
```

论文填写在：

```js
publications: {
  items: [...]
}
```

每篇论文复制一个对象即可：

```js
{
  year: "2026",
  title: "Paper Title",
  authors: [
    { name: "Your Name", highlight: true },
    { name: "Coauthor A" }
  ],
  venue: "Conference or Journal Name, 2026.",
  links: [
    { label: "PDF", href: "https://example.com/paper.pdf" },
    { label: "Code", href: "https://github.com/..." }
  ]
}
```

## 第二步：放入照片

把你的照片复制到：

```text
assets/profile.jpg
```

然后在 `assets/content.js` 里把：

```js
photo: "assets/profile-placeholder.svg",
```

改成：

```js
photo: "assets/profile.jpg",
```

推荐照片尺寸：正方形或接近正方形，至少 `600 x 600 px`。

## 第三步：本地预览

在项目文件夹里运行：

```bash
python3 -m http.server 8000
```

浏览器打开：

```text
http://localhost:8000
```

如果电脑没有 Python，也可以直接双击 `index.html` 预览；正式检查时建议用上面的本地服务器。

## 第四步：部署到 GitHub Pages

### 方式 A：个人主页，网址是 username.github.io

1. 登录 GitHub。
2. 新建仓库，仓库名必须是：

```text
你的GitHub用户名.github.io
```

3. 把本文件夹里的所有文件上传到仓库根目录，包括 `.nojekyll`。
4. 提交到 `main` 分支。
5. 等待一会儿，访问：

```text
https://你的GitHub用户名.github.io/
```

GitHub 官方文档说明：用户或组织主页仓库需要命名为 `<user>.github.io` 或 `<organization>.github.io`；从分支发布静态文件时，可以用 `.nojekyll` 关闭默认 Jekyll 处理。

### 方式 B：项目主页，网址是 username.github.io/repo-name

1. 新建任意仓库，例如 `homepage`。
2. 上传本文件夹里的所有文件到仓库根目录。
3. 进入仓库 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. Branch 选择 `main`，Folder 选择 `/root`。
6. 保存后访问 GitHub 给出的 Pages 地址。

GitHub 官方文档说明：Pages 可以从指定分支发布，发布目录可以是仓库根目录 `/` 或 `/docs`。

## 用命令行上传

如果你熟悉 Git，可以这样上传：

```bash
git init
git add .
git commit -m "Create academic homepage"
git branch -M main
git remote add origin git@github.com:你的GitHub用户名/你的GitHub用户名.github.io.git
git push -u origin main
```

## 发到另一台电脑

把压缩包解压后，另一台电脑只需要：

1. 打开 `README.md`。
2. 修改 `assets/content.js`。
3. 放入 `assets/profile.jpg`。
4. 本地预览。
5. 上传到 GitHub Pages。

## 常见问题

### 为什么不是 React / Vue / Next.js？

学术主页更适合静态文件：打开快、维护简单、GitHub Pages 直接托管。这个模板的技术栈是 HTML + CSS + 原生 JavaScript。

### 为什么要有 `.nojekyll`？

GitHub Pages 默认会按 Jekyll 处理分支发布的站点。这个项目不是 Jekyll 项目，`.nojekyll` 可以让 GitHub Pages 原样发布静态文件。

### 上传后页面没有变化怎么办？

等 1-3 分钟后刷新；必要时用无痕窗口打开。确认 `index.html` 在仓库根目录，且 `assets/content.js` 也上传了。

## 参考

- GitHub Pages 创建站点文档: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- GitHub Pages 发布源配置: https://docs.github.com/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
