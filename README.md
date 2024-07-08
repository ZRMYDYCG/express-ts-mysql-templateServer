## Express + TypeScript

Express.js 是一个灵活的 Node.js web 应用框架，它提供了一系列强大的功能，帮助你创建各种 Web 和移动设备应用。而 TypeScript，作为 JavaScript 的一个超集，它添加了静态类型和对ES6的支持，使得代码更加健壮、易于维护。

## 文章

一、[Express 内置的中间件(express.json 和 express.urlencoded)格式的请求体数据](https://www.cnblogs.com/UnfetteredMan/p/13854653.html)

二、[《TypeScript》入门与精通-tsconfig.json 配置文件超详解](https://oliver.blog.csdn.net/article/details/121784420)

三、[TypeScript 如何在 node 应用中使用@types/node](https://geek-docs.com/typescript/typescript-questions/776_typescript_how_to_use_typesnode_in_node_application.html)

四、[MySql笔记专栏](https://blog.csdn.net/i_r_o_n_m_a_n/category_11736487.html)

## 开发工具 VSCode

如何设置代码排版工具:

1. 安装插件

![](https://pic.imgdb.cn/item/668a3926d9c307b7e9d1176f.png)

2. 配置 .prettierrc 文件于根目录下

![](https://pic.imgdb.cn/item/668a39ffd9c307b7e9d273c9.png)

3. 配置格式化代码命令行

![](https://pic.imgdb.cn/item/668a3a70d9c307b7e9d324f8.png)

4. 修改编辑器配置（推荐）

Windows 用户按下 Ctrl + ,来到如下设置面板来勾选保存时格式化代码文件

![](https://pic.imgdb.cn/item/668a39a2d9c307b7e9d1c269.png)

## 设计 Express 项目的应用架构

对于其它的重型框架应用而言, 一般都是有规定其项目的架构方式, 现在选用的 Express 是一个轻型的框架, 框架本身并没有给我们停供太多的建议, 这给了我们很大的一个自由度去设计自己项目的应用架构, 因此我们可以结合自己的应用功能特点去细分自己的项目架构方式。

## 数据库

MySql

数据定义语言: 设计数据表格

![](https://pic.imgdb.cn/item/668a7c1fd9c307b7e936165b.png)

处理数据语言: INSERT、DELETE、UPDATE、SELECT

![](https://pic.imgdb.cn/item/668a8413d9c307b7e9429e1d.png)

数据关系:

![](https://pic.imgdb.cn/item/668a8748d9c307b7e94774a3.png)

## 数据库图形界面工具

DataGrip

![](https://pic.imgdb.cn/item/668a69cbd9c307b7e91be80f.png)

## 数据库设计

![](https://pic.imgdb.cn/item/668a7b6bd9c307b7e9351633.png)

![](https://pic.imgdb.cn/item/668a7b98d9c307b7e9355773.png)

## Hash 处理用户账户信息

Hash对于用户的密码设置可以使得用户信息更加安全, 这么做可以使得即使是开发者也不知道用户所填写的密码。

## 提问-AI

### dotenv什么作用?

```ts
import dotenv from 'dotenv'

dotenv.config()

/**
 * 应用配置
*/
export const { APP_PORT } = process.env

/**
 * 数据仓库配置
*/
export const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = process.env  
```

dotenv 是一个零依赖的环境变量加载器，用于 Node.js 应用程序。它的主要作用是从一个 .env 文件中加载环境变量到 process.env 中，这样您就可以在代码中使用这些环境变量，而不必在代码中硬编码敏感信息，如数据库密码、API 密钥等。

dotenv 的主要特点包括：

- 安全性：通过将配置信息（如数据库密码、API 密钥等）存储在 .env 文件中，可以避免将这些敏感信息直接写入源代码中，从而提高安全性。

- 灵活性：可以在不同的环境（开发、测试、生产等）使用不同的 .env 文件，以适应不同的配置需求。

- 简便性：使用 dotenv.config() 可以自动加载当前目录下的 .env 文件，或者通过配置参数加载指定的 .env 文件。

- 集成性：dotenv 与 Node.js 的 process.env 无缝集成，加载的环境变量可以直接通过 process.env 访问。

在您提供的代码示例中：

- import dotenv from 'dotenv'：导入 dotenv 模块。
- dotenv.config()：调用 dotenv 的 config 方法，加载 .env 文件中的环境变量。
- export const { APP_PORT } = process.env：从 process.env 中导出 APP_PORT 环境变量，使其可以在其他模块中使用。
- export const { MYSQL_HOST, MYSQL_PORT, ... } = process.env：类似地，导出数据库配置相关的环境变量。
- 使用 dotenv 的好处是，您可以在部署应用程序时，通过修改 .env 文件来更改配置，而无需更改代码本身。这使得应用程序更易于在不同的环境中部署和维护。


### 如果我不导入这个dotenv, 是不是在该文件就不可以使用.env?

是的，如果您没有导入 dotenv 并且没有调用 dotenv.config() 来加载 .env 文件中的环境变量，那么在该文件中您将无法使用这些环境变量。尝试访问未定义的环境变量将会导致 undefined。

例如，如果您的代码中有如下行：

export const { APP_PORT } = process.env
如果您没有先导入并配置 dotenv，APP_PORT 将不会被定义，尝试访问 process.env.APP_PORT 将返回 undefined，这可能会导致您的应用程序在尝试使用这个变量时出错。

.env 文件通常包含如下内容：

```bash
APP_PORT=3000
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=myuser
MYSQL_PASSWORD=mypassword
MYSQL_DATABASE=mydatabase
```

在您的应用程序中，您需要先导入并配置 dotenv，然后才能使用这些变量。一旦配置了 dotenv，您就可以在整个应用程序中安全地使用这些环境变量了。如果您不使用 dotenv 或者不加载 .env 文件，您需要找到其他方式来设置这些变量，例如直接在代码中硬编码，但这通常不推荐，因为它降低了应用程序的安全性和灵活性。


### 现在我不明白的点是我不知道中间件、路由、以及自定义中间件时 next()函数的意思?

```ts
import express from 'express';
import postRouter from '../post/post.router'
import { defaultErrorHandler } from './app.middleware'

/**
 * 创建应用
 */
const app = express();

/**
 * 中间件-处理JSON
 */
app.use(express.json());

/**
 * 路由
*/
app.use(postRouter)

/**
 * 中间件-默认异常处理器
*/
app.use(defaultErrorHandler)


/**
 * 导出应用
 */
export default app;   我不是很理解这个中间件的使用，这里我用了内置的中间件，同时也用到了自己封装的中间件：/**
 * 异常处理器
*/
export const defaultErrorHandler = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    if (error.message) {
        console.log('🦠', error.message)
    }

    let statusCode: number, message: string

    /**
     * 处理异常
    */
    switch (error.message) {
        default:
            statusCode = 500
            message = "服务器暂时出了点问题🦠"
            break
    }

    response.status(statusCode).send({ message })
}  
```

在 Express.js 框架中，中间件、路由和 next() 函数扮演着重要的角色。下面是对这些概念的解释：

中间件

中间件在 Express.js 应用程序中是一个函数，它拥有访问请求对象 (request)、响应对象 (response) 和 next() 函数的权限。中间件可以执行以下任务：

执行任何代码。

对请求和响应对象进行修改。

结束请求-响应周期。

调用堆栈中的下一个中间件。

中间件可以是应用级别的，也可以是路由级别的。**应用级别的中间件会应用于所有的请求，而路由级别的中间件只适用于特定的路由。**

路由

路由是 Express.js 中的一个概念，用于将客户端的请求 URL 映射到特定的处理函数上。路由通常包括 URL 路径和 HTTP 请求方法（如 GET、POST 等）。当一个请求到达服务器时，Express 会检查路由定义并找到匹配的路由处理函数。

next() 函数

next() 函数是一个在中间件中使用的函数，用于将控制权传递给下一个中间件或路由处理函数。如果当前中间件没有结束请求-响应周期，它会调用 next() 来继续执行后续的中间件或路由。

自定义中间件

自定义中间件是您自己编写的中间件函数，用于处理特定的任务。例如，您提供的 defaultErrorHandler 中间件是一个自定义的异常处理器，它的作用是捕获应用程序中抛出的错误，并返回一个统一的错误响应。

在 defaultErrorHandler 中，next() 函数没有被使用，因为它是作为错误处理中间件的最后一个调用，当发生错误时，它将结束请求-响应周期。但是，在其他类型的中间件中，您可能会看到类似这样的代码：


```ts
app.use((req, res, next) => {
    // 一些处理逻辑
    next(); // 将控制权传递给下一个中间件或路由
});
```

在这个例子中，如果中间件完成了它的任务并且没有结束响应，它会调用 next() 来继续执行应用程序中的下一个中间件或路由处理函数。

总结

中间件：处理请求和响应的函数，可以访问请求和响应对象，也可以调用 next()。

路由：将请求 URL 和 HTTP 方法映射到处理函数。

next()：在中间件中用于将控制权传递给下一个中间件或路由。

希望这可以帮助您更好地理解 Express.js 中的这些核心概念。如果您有更具体的问题或需要示例代码，请随时提问。


### 那我自己封装的那个中间件是属于是应用级别的吗，那它怎么就全局生效了呢，不需要引用吗？

您自己封装的中间件，如果像您在代码示例中那样使用 app.use() 来注册，那么它就是一个应用级别的中间件。应用级别的中间件会应用于进入应用程序的所有请求，无论请求的目标是哪一个路由。

在 Express.js 中，中间件可以通过以下两种方式注册：

局部中间件：当中间件只注册到特定的路由或路由组上时，它只会处理那些特定路由的请求。例如：

```ts
const someMiddleware = (req, res, next) => {
    // 中间件逻辑
    next();
};

app.get('/some-route', someMiddleware, (req, res) => {
    // 路由处理逻辑
});
```

应用级别中间件：当使用 app.use(middleware) 注册中间件时，它会成为应用级别的中间件，处理所有进入应用程序的请求，除非请求在到达该中间件之前已经被前面的中间件处理完毕（例如，通过调用 res.send() 或抛出错误等）。例如：

```ts
app.use(someMiddleware);
或者直接使用函数作为中间件：

app.use((req, res, next) => {
    // 应用级别的中间件逻辑
    next();
});
```

您的自定义异常处理器中间件使用 app.use() 注册，因此它是一个应用级别的中间件，会捕获应用程序中未被前面的中间件或路由处理函数处理的所有错误。这也是为什么它能够全局生效的原因。

此外，错误处理中间件（如您的 defaultErrorHandler）有一些特殊的行为：

它们必须使用四个参数定义，即 (error, req, res, next)。
它们应该总是在中间件堆栈的最后注册，以确保它们能够捕获其他中间件或路由处理函数抛出的所有错误。
错误处理中间件不需要调用 next()，因为它们负责生成响应并结束请求-响应周期。
通过这种方式，您的自定义异常处理器中间件能够全局生效，为整个应用程序提供一个统一的错误处理机制。


### 对于一个默认 export default 导出的模块，我们是不是可以在导入的时候 随便取一个名字进行导入?

是的，当您使用 export default 导出模块时，您可以在导入该模块时使用任意名称。export default 语句允许您导出模块中的一个默认值，这个值可以是函数、类、对象或任何其他JavaScript值。

导出模块示例：

```ts
// myModule.js
export default function myFunction() {
    console.log('Hello from myFunction!');
}
```

导入模块示例：

```ts
// 导入默认导出的模块，可以取任意名称
import myCustomName from './myModule';

// 使用导入的模块
myCustomName(); // 输出: Hello from myFunction!
在上面的例子中，myFunction 是默认导出的，所以在导入时，您可以给它取任何您喜欢的名称，比如 myCustomName。之后，您就可以使用这个新的名称来引用导出的函数。
```

注意事项：

尽管您可以为默认导出的模块取任意名称，但通常建议使用描述性且与原模块名称相关的名称，以提高代码的可读性。
如果一个模块同时包含默认导出和命名导出，您仍然可以为默认导出取任意名称，但命名导出必须使用原名称导入。例如：

```ts
// myModule.js
export default function myFunction() {
    console.log('Hello from myFunction!');
}

export const myConst = 42;

// 导入模块
import myCustomFunction, { myConst as customConst } from './myModule';

// 使用导入的模块
myCustomFunction(); // 输出: Hello from myFunction!
console.log(customConst); // 输出: 42
```

在这个例子中，myFunction 是默认导出，而 myConst 是命名导出。导入时，myFunction 被赋予了新的名称 myCustomFunction，而 myConst 则被赋予了新的名称 customConst。


### 在 express 框架当中，是不是所有的自定义函数里面都可以接受如下的3个参数，我很迷惑，这怎么冒出来的？？？

```ts
import type { Request, Response, NextFunction } from "express"
import { UserModel } from "./user.model"
import * as userService from './user.server'

/**
 * 创建用户
*/
export const store = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { name, password } = request.body
}
```

回答:

在 Express.js 框架中，自定义的中间件函数可以接受三个参数：request、response 和 next。这些参数是 Express 为中间件提供的，它们代表了 HTTP 请求的不同方面：

1. request (类型为 Request)：包含请求信息，如请求头、请求体、查询参数等。

2. response (类型为 Response)：包含响应对象，用于构造响应发送回客户端。

3. next (类型为 NextFunction)：是一个函数，用于将控制权传递给下一个中间件或路由处理器。如果当前中间件没有完全处理请求（即没有调用 response 的方法如 res.send() 或 res.json() 来发送响应），则需要调用 next() 来继续执行后续的中间件或路由。

在您的示例中：

```ts
import type { Request, Response, NextFunction } from "express";
// ...其他导入

export const store = async (
    request: Request,
    response: Response,
    next: NextFunction // 这里定义了 next 函数的类型为 NextFunction
) => {
    // 中间件逻辑
    const { name, password } = request.body; // 从请求体中解构出 name 和 password
    // 接下来可能调用 userService 来创建用户，或者调用 next() 传递控制权
}
```

store 函数被定义为一个异步函数（使用 async 关键字），这意味着它可能执行异步操作（如数据库操作）。在这个函数中，您可以使用 await 关键字等待异步操作的结果，而不会阻塞整个请求处理流程。

next 参数的使用是可选的，如果您的中间件函数不需要显式地调用下一个中间件或路由处理器，您可以省略这个参数。但是，如果您的中间件可能会根据条件调用 next()，那么就需要包含这个参数。

通常，中间件函数至少接受 request、response 这两个参数，next 是可选的。但是，如果您的中间件需要与 Express 的中间件机制完全兼容（例如，处理错误或条件性地调用下一个中间件），那么包含 next 是一个好习惯。

在 Express 的路由处理函数中，您也可以使用这三个参数，但路由处理函数通常只关注 request 和 response，因为路由处理函数的目的是生成响应并结束请求-响应周期。

### 那为什么有些自定义函数，可以接受其它参数呢？这是特定写法吗，有些疑惑，感觉很奇怪?

在 Express.js 中，自定义函数可以接受额外的参数，这通常是因为这些函数被设计为中间件或路由处理函数，并且它们使用了 Express 的灵活的参数处理机制。以下是一些可能导致您看到额外参数的原因：

错误处理中间件:

错误处理中间件需要四个参数：error, request, response, next。这是 Express 错误处理中间件的标准签名。

```ts
export const errorHandler = (error, req, res, next) => {
    // 错误处理逻辑
};
```

路由处理函数:

路由处理函数可以有四个参数：request, response, next, 和任何其他您定义的参数。这些额外的参数可以用于访问请求参数（如 req.params）、查询参数（如 req.query）、请求体（如 req.body）等。

```ts
app.get('/users/:id', (req, res, next) => {
    const { id } = req.params; // 使用 req.params 访问路由参数
    // 处理逻辑
});
```

中间件工厂:

有时，您可能希望创建一个中间件工厂函数，这个函数接受一些配置参数，并返回一个实际的中间件函数。这样，您可以根据不同的配置重复使用中间件逻辑。

```ts
function loggingMiddleware(options) {
    return (req, res, next) => {
        // 使用 options 进行日志记录
        next();
    };
}

const middleware = loggingMiddleware({ level: 'verbose' });
app.use(middleware);
```

自定义中间件:

您可以定义接受额外参数的自定义中间件，这些参数可以是服务、工具或任何其他您需要在中间件逻辑中使用的资源。

```ts
function userMiddleware(userService) {
    return async (req, res, next) => {
        try {
            const user = await userService.getUserById(req.params.id);
            req.user = user; // 将用户信息添加到请求对象上
            next();
        } catch (error) {
            next(error);
        }
    };
}

const userMiddlewareInstance = userMiddleware(userService);
app.use('/user', userMiddlewareInstance);
```

Express 的灵活性:

Express 允许您在中间件和路由处理函数中定义额外的参数，这些参数将从请求对象 req 中获取。例如，您可以访问路由参数 req.params。

这种灵活性是 Express 的设计哲学之一，它允许开发者根据需要编写高度可定制的中间件和路由处理函数。如果您看到某个自定义函数接受额外的参数，这通常是为了提供更多的灵活性和重用性。理解这些参数的作用和它们如何与请求对象交互，将有助于您更好地使用和编写 Express 中间件。

### 也即是说这些函数参数定义方式，随便你选择对吧？既可以定义一个处理普通数据的函数，也可以定义处理错误的中间件函数，也可以定义路由的中间件函数等等，我的理解对吗？Express真的是很灵活

您的理解基本正确。在 Express.js 中，确实提供了极大的灵活性来定义不同类型的函数，这些函数可以是普通中间件、路由处理器、错误处理中间件，或者是带有额外参数的自定义中间件。以下是一些关键点，帮助您更好地理解 Express 的灵活性：

普通中间件：可以接受 request、response 和 next 三个参数。它们主要用于处理请求，修改请求或响应对象，或者调用 next() 将控制权传递给下一个中间件。

路由处理器：通常接受 request、response 和可能的额外参数（如路由参数 req.params），但不包括 next。路由处理器的目的是处理特定的请求路径和方法，并最终发送响应。

错误处理中间件：必须接受四个参数：error, request, response, next。这种中间件专门用来处理在前面的中间件或路由处理器中抛出的错误。

自定义中间件：可以定义额外的参数，这些参数可以是服务、工具类、配置对象等。自定义中间件可以执行特定的任务，如身份验证、日志记录、数据验证等。

中间件工厂：有时您会看到一个函数返回另一个函数，这种模式常用于创建可配置的中间件。返回的函数是实际的中间件，可以包含额外的参数。

Express 的灵活性：Express 允许开发者根据需要定义和使用不同类型的函数。这种设计哲学使得 Express 成为一个强大而灵活的框架。

参数约定：虽然 Express 允许灵活性，但在团队项目中，建议遵循一些约定，以保持代码的一致性和可维护性。

类型注解：使用 TypeScript 或 JSDoc 等工具，您可以为函数参数提供类型注解，这有助于提高代码的可读性和减少错误。

Express 的灵活性确实为开发者提供了便利，使得您可以根据应用的需求来编写适合的中间件和路由处理器。不过，这种灵活性也需要开发者有良好的设计和编码习惯，以充分利用框架的能力，同时保持代码的清晰和可维护性。


### 对于我这种，应该就是普通中间件吧?

```ts
import { connection } from "../app/database/mysql"
import { PostModel } from "./post.model"

/**
 * 获取内容列表
*/
export const getPosts = async () => {
    // 准备查询
    const statement = `
    SELECT post.id, post.title, post.content, JSON_OBJECT('id', user.id, 'name', user.name) as user
    FROM post
    LEFT JOIN user
        ON post.userId = user.id
    `

    // 执行查询
    const [data] = await connection.promise().query(statement)

    // 返回执行SQL后的结果
    return data
}

/**
 * 创建内容
*/
export const createPost = async (post: PostModel) => {
    const statement = `
    INSERT INTO post
    SET ?
    `

    const [data] = await connection.promise().query(statement, post)

    return data
}


/**
 * 更新内容
*/
export const updatePost = async (postId: number, post: PostModel) => {
    const statement = `
    UPDATE post
    SET ?
    WHERE id = ?
    `

    // 执行SQL并提供参数
    const [data] = await connection.promise().query(statement, [post, postId])

    return data
}


/**
 * 删除内容
*/
export const deletePost = async (posiId: number) => {
    const statement = `
    DELETE FROM post
    WHERE id = ?
    `

    // 执行查询
    const [data] = await connection.promise().query(statement, posiId)

    return data
}
```

您的代码示例中定义的 `getPosts`、`createPost`、`updatePost` 和 `deletePost` 函数并不是 Express 的中间件，而是一些异步的数据库操作函数。这些函数封装了对数据库的 CRUD（创建、读取、更新、删除）操作，使用了 Promise 和 `await` 来处理异步数据库查询。

在 Express 应用中，这些函数通常不会直接作为中间件使用，而是在中间件中被调用。例如，您可能会创建一个中间件来处理获取帖子列表的请求：

```javascript
// 假设 getPosts 是上面定义的数据库操作函数
app.get('/posts', async (req, res, next) => {
    try {
        const posts = await getPosts();
        res.json(posts);
    } catch (error) {
        next(error); // 将错误传递给错误处理中间件
    }
});
```

在上述示例中，`/posts` 路由的中间件调用了 `getPosts` 函数来获取帖子列表，并将结果以 JSON 格式返回给客户端。如果查询过程中发生错误，使用 `next(error)` 将错误传递给错误处理中间件。

以下是如何将其他数据库操作函数集成到 Express 路由处理中的示例：

- **创建内容**：

```javascript
app.post('/posts', async (req, res, next) => {
    try {
        const post = req.body; // 假设请求体包含新帖子的数据
        const createdPost = await createPost(post);
        res.status(201).json(createdPost);
    } catch (error) {
        next(error);
    }
});
```

- **更新内容**：

```javascript
app.put('/posts/:id', async (req, res, next) => {
    try {
        const { id } = req.params; // 获取路由参数中的帖子 ID
        const updatedPost = req.body; // 假设请求体包含更新的数据
        const updated = await updatePost(id, updatedPost);
        res.json(updated);
    } catch (error) {
        next(error);
    }
});
```

- **删除内容**：

```javascript
app.delete('/posts/:id', async (req, res, next) => {
    try {
        const { id } = req.params; // 获取路由参数中的帖子 ID
        const result = await deletePost(id);
        res.status(204).send(); // 删除操作通常不返回内容，只返回状态码
    } catch (error) {
        next(error);
    }
});
```

在这些示例中，路由处理函数使用 `async` 关键字，这意味着它们可以包含 `await` 表达式。这些函数处理 HTTP 请求，调用相应的数据库操作函数，并发送响应。错误通过调用 `next(error)` 传递给错误处理中间件。

总之，您的数据库操作函数不是中间件，而是在中间件中被调用的普通异步函数。Express 中间件可以是任何具有特定签名的函数，用于处理请求、响应或两者之间的流程。


### 那我理解了，是不是Express会自动去判断你封装的这个函数是否是中间件函数，判断依据即是你是否传递对应的参数?

Express 框架本身不会自动判断一个函数是否为中间件函数。中间件函数是一个具有特定签名的函数，它必须符合以下条件：

1. **接受三个参数**：`request` (`req`), `response` (`res`), 和 `next` (`next`)。
2. **不返回任何内容**：中间件函数通常不返回任何内容，它们要么调用 `next()` 函数将控制权传递给下一个中间件，要么通过 `res` 对象发送响应给客户端。
3. **可能修改请求或响应对象**：中间件可以读取、修改 `req` 或 `res` 对象，或者触发错误处理。

如果一个函数符合上述条件，它可以作为中间件在 Express 应用中使用。Express 通过检查函数的参数列表来确定它是否可以作为中间件：

- 如果函数接受三个参数 (`req`, `res`, `next`)，Express 会将其视为中间件，并在请求处理流程中调用它。
- 如果函数接受四个参数，并且第一个参数是错误对象，Express 会将其视为错误处理中间件。

您的数据库操作函数，如 `getPosts`、`createPost`、`updatePost` 和 `deletePost`，不符合中间件的签名，因为它们不接受 `req`、`res` 或 `next` 参数。这些函数是业务逻辑层的一部分，通常在中间件中被调用，以执行数据库操作并返回结果。

例如，您可能会创建一个中间件来调用 `getPosts` 函数，并发送结果给客户端：

```javascript
app.get('/posts', async (req, res, next) => {
    try {
        const posts = await getPosts(); // 调用业务逻辑层的函数
        res.json(posts); // 使用 Express 的 res 对象发送响应
    } catch (error) {
        next(error); // 如果有错误，传递给 Express 的错误处理中间件
    }
});
```

在这个例子中，路由处理中间件使用 `getPosts` 函数来获取数据，并通过 `res.json` 发送 JSON 响应。如果 `getPosts` 抛出错误，使用 `next(error)` 将错误传递给 Express 的错误处理机制。

总结来说，Express 不会自动判断函数是否为中间件，而是根据函数的参数列表来调用它。中间件必须遵循特定的签名，以便 Express 正确地将其集成到请求处理流程中。
