(async function() {
    const team_1 = "方式一 (琴，钟离，岩主，提纳里)";
    const team_2 = "方式二 (琴，钟离，岩主，欧洛仑)";
    const team_3 = "方式三 (琴，钟离，岩主，任意风)";

    async function clickByImg(imgName=""){
        let path;
        try {
            // 获取游戏截图
            const captureRegion = captureGameRegion();
            path = "assets/" + imgName + ".png";
            // 模板匹配
            const template = file.readImageMatSync(path);
            const recognitionObject = RecognitionObject.TemplateMatch(template);
            const result = captureRegion.Find(recognitionObject);

            if (!result.IsEmpty()) {
                //log.info(`找到目标，位置: (${result.X}, ${result.Y})`);
                result.Click();
            }
            // 释放资源
            template.Dispose();
            captureRegion.Dispose();

        } catch (error) {
            log.error(`图像处理失败: ${error.message}`);
        }
    }

    async  function check(imgName=""){
        let path;
        try {
            // 获取游戏截图
            const captureRegion = captureGameRegion();
            path = "assets/" + imgName + ".png";
            // 模板匹配
            const template = file.readImageMatSync(path);
            const recognitionObject = RecognitionObject.TemplateMatch(template);
            const result = captureRegion.Find(recognitionObject);

            if (!result.IsEmpty()) {
                //log.info(`找到目标，位置: (${result.X}, ${result.Y})`);
                return true;
            }
            // 释放资源
            template.Dispose();
            captureRegion.Dispose();

        } catch (error) {
            log.error(`图像处理失败: ${error.message}`);
        }
    }

    async function beginFight(test=100){
        await sleep(4500);
        const template = file.readImageMatSync("assets/qinE.png");
        const recognitionObject = RecognitionObject.TemplateMatch(template);
        for (let i = 0; i < 50; i++) {
            let captureRegion = captureGameRegion();  // 获取一张截图
            let res = captureRegion.Find(recognitionObject);
            if (!res.isEmpty()) {
                //log.info("---------您已抵达战场---------");
                //log.info("第{i}次识别成功",i);
                template.Dispose();
                captureRegion.Dispose();
                let team = settings.team;
                log.info("战斗方式为: {team}",team);
                if (team === team_1){
                    await fight1(test);
                }
                if (team === team_2){
                    await fight2(test);
                }
                if (team === team_3){
                    await fight3(test);
                }


                break;
            }
            await sleep(50);
        }
    }

    //这个是带提纳里的
    async function fight1(testTime=100){
        log.info("---------开打开打！！！!!---------")
        //log.info("延迟为{testTime}",testTime);

        //第一次摔
        await sleep(parseInt(settings.time2));
        keyDown("VK_LSHIFT")
        await sleep(100);
        keyUp("VK_LSHIFT");
        await sleep(600);
        keyDown("VK_LSHIFT")
        await sleep(100);
        keyUp("VK_LSHIFT");

        await sleep(800);
        keyDown("VK_E")
        await sleep(100);
        keyUp("VK_E");

        await sleep(1000);
        keyDown("VK_LBUTTON")
        await sleep(400);
        keyUp("VK_LBUTTON");

        await sleep(500);

        keyDown("VK_3")
        await sleep(100);
        keyUp("VK_3");


        await sleep(250);

        keyDown("VK_E")
        await sleep(100);
        keyUp("VK_E");

        await sleep(750);
        keyDown("VK_1")
        await sleep(150);
        keyUp("VK_1");

        await sleep(100);
        keyDown("s");
        await sleep(600);
        keyUp("s");

        await sleep(100);

        keyDown("VK_LBUTTON")
        await sleep(400);
        keyUp("VK_LBUTTON");

        await sleep(500);

        keyDown("VK_4")
        await sleep(100);
        keyUp("VK_4");

        await sleep(300);

        keyDown("VK_E")
        await sleep(100);
        keyUp("VK_E");

        await sleep(parseInt(settings.ti1));

        keyDown("VK_2")
        await sleep(100);
        keyUp("VK_2");

        await sleep(400);

        keyDown("VK_E")
        await sleep(100);
        keyUp("VK_E");

        await sleep(400);

        keyDown("VK_1")
        await sleep(100);
        keyUp("VK_1");

        await sleep(350);
        keyDown("VK_E");
        await sleep(100);

        moveMouseBy(parseInt(settings.qinX1),parseInt(settings.qinY1));
        await sleep(500);
        keyUp("VK_E");
        await sleep(400);

        keyDown("VK_S")
        await sleep(100);
        keyDown("VK_LSHIFT")
        await sleep(100);
        keyUp("VK_LSHIFT");
        await sleep(200);
        keyUp("VK_S")
        await sleep(100);
        keyDown("VK_W")
        await sleep(100);
        keyUp("VK_W");



        await sleep(200);
        keyPress("VK_2");
        await sleep(350);
        keyPress("VK_Q");

        await sleep(2500);
        middleButtonClick();
        await sleep(2000);

        keyPress("VK_1");
        await sleep(350);

        keyDown("VK_W")
        await sleep(100);
        keyDown("VK_LSHIFT")
        await sleep(100);
        keyUp("VK_LSHIFT");
        await sleep(200);
        keyUp("VK_W")
        await sleep(100);

        keyDown("VK_E");
        await sleep(100);
        moveMouseBy(parseInt(settings.qinX2),parseInt(settings.qinY2));
        await sleep(450);
        keyUp("VK_E");



        await sleep(parseInt(settings.time1));





    }

    //这个是带孙子的
    async function fight2(testTime=100){
        log.info("---------开打开打！！！!!---------")
        await sleep(150);
        keyDown("VK_LSHIFT")
        await sleep(50);
        keyUp("VK_LSHIFT");
        await sleep(400);
        keyDown("VK_LSHIFT")
        await sleep(50);
        keyUp("VK_LSHIFT");
        await sleep(1100);
        keyDown("VK_E")
        await sleep(50);
        keyUp("VK_E");
        await sleep(1000);
        keyDown("VK_LBUTTON")
        await sleep(1100);
        keyUp("VK_LBUTTON");

        await sleep(50);

        keyDown("VK_3")
        await sleep(50);
        keyUp("VK_3");

        await sleep(100);

        keyDown("VK_E")
        await sleep(50);
        keyUp("VK_E");

        await sleep(600);

        keyDown("VK_S");
        keyDown("VK_SPACE");

        await sleep(260);

        keyUp("VK_S");
        await sleep(1);
        keyUp("VK_SPACE");
        await sleep(50);

        keyDown("VK_1");
        await sleep(50);
        keyUp("VK_1");



        await sleep(350);
        keyDown("VK_W");
        await sleep(20);
        keyUp("VK_W");
        await sleep(250);
        keyDown("VK_LBUTTON");
        await sleep(950);
        keyUp("VK_LBUTTON");
        await sleep(300);
        keyDown("VK_4");
        await sleep(50);
        keyUp("VK_4");
        await sleep(250);
        keyDown("VK_E");
        await sleep(30);
        keyUp("VK_E");
        await sleep(800);
        keyDown("VK_2");
        await sleep(50);
        keyUp("VK_2");
        await sleep(50);
        keyDown("VK_W");
        //46
        await sleep(46);
        keyUp("VK_W");
        //480
        await sleep(480);
        keyDown("VK_E");
        await sleep(1);
        keyUp("VK_E");
        await sleep(500);
        keyDown("VK_1");
        await sleep(50);
        keyUp("VK_1");
        await sleep(250);

        keyDown("VK_E");
        await sleep(100);
        moveMouseBy(0,-6000);
        await sleep(200);
        keyUp("VK_E");
        await sleep(400);
        await sleep(1000);
        keyPress("VK_2");
        await sleep(350);
        keyPress("VK_Q");

        await sleep(3000);
        middleButtonClick();
        await sleep(2000);

        keyPress("VK_1");
        await sleep(350);
        keyDown("VK_E");
        await sleep(100);
        moveMouseBy(0,-6000);
        await sleep(400);
        keyUp("VK_E");







        await sleep(5000);


    }

    async function fight3(testTime=100){
        log.info("---------开打开打！！！!!---------")
        //log.info("延迟为{testTime}",testTime);

        //第一次摔
        keyDown("w");
        await sleep(1500);
        keyUp("w");
        await sleep(25);
        keyDown("VK_E");
        await sleep(100);
        moveMouseBy(-200,-6000);
        await sleep(400);
        keyUp("VK_E");
        await sleep(400);



        middleButtonClick();
        await sleep(100);
        keyPress("VK_3");
        await sleep(200);
        leftButtonClick();
        await sleep(500);
        keyPress("VK_E");


        await sleep(900);
        keyPress("VK_1");
        await sleep(100);

        keyDown("s");
        await sleep(700);
        keyUp("s");

        // await sleep(100);
        // keyPress("w");
        await sleep(100);
        // keyPress("VK_E");
        //
        // await sleep(800);
        keyDown("VK_LBUTTON");
        await sleep(1000);
        keyUp("VK_LBUTTON");

        await sleep(100);
        keyDown("s");
        await sleep(250);
        keyPress("VK_SPACE");
        await sleep(100);
        keyUp("s");


        await sleep(200);
        keyPress("VK_2");
        await sleep(200);
        keyDown("D");
        //162
        await sleep(162);
        keyUp("D");
        keyDown("w");
        //钟离
        await sleep(265);

        keyUp("w");
        await sleep(200);
        keyPress("VK_E");

        await sleep(800);


        /*  keyDown("W");
          await sleep(300);
          keyUp("W");*/

        keyDown("VK_LBUTTON");
        await sleep(1000);
        keyUp("VK_LBUTTON");


        await sleep(200);
        keyPress("VK_1");

        await sleep(300);
        keyDown("VK_E");
        await sleep(100);
        moveMouseBy(0,-8000);
        await sleep(300);
        keyUp("VK_E");
        await sleep(400);

        middleButtonClick();

        await sleep(500);
        keyPress("VK_2");

        await sleep(300);
        keyDown("s");
        await sleep(100);
        keyPress("VK_SPACE");
        await sleep(200);
        keyUp("s");
        await sleep(600);
        keyPress("VK_Q");








        await sleep(6000);





    }

    await clickByImg("begin");
    let tryTimes = parseInt(settings.tryTimes);
    log.info("尝试次数:{tryTimes}",tryTimes);
    let a;
    for (let i = 0; i < tryTimes; i++) {
        log.info("第{i}次实验", i + 1);
        let testTime = 0;
        await beginFight(42);
        keyPress("VK_ESCAPE");
        await sleep(1500);

        if (await check("end")) {
            log.info("哈哈哈哈哈哈！！！！")
            log.info("哈哈哈哈哈哈！！！！")
            log.info("哈哈哈哈哈哈！！！！")
            a = "挑战成功！！！！！！！！";
            log.info("第{i}次尝试 {a}", i,a);
            break;
        } else {
            await clickByImg("retry");
        }
    }



})();