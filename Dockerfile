FROM quay.io/inrlwabot/inrl-bot-md:latest
RUN git clone https://github.com/intkfthhffffghhbvfdsscghhnkkjjjjhhgg/miskpro /root/Bixby/
WORKDIR /root/Bixby/
ENV TZ=Asia/Kolkata
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
