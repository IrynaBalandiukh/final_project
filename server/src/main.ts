import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {NestFactory} from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common';

import {AppModule} from './app.module';

async function bootstrap() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule, {cors: true});
    app.useGlobalPipes(new ValidationPipe())
    const config = new DocumentBuilder()
        .setTitle('App')
        .setDescription('my companies')
        .setVersion('1.0.0')
        .addTag('tag')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => console.log(`server started at port ${PORT}`));
}

bootstrap();
