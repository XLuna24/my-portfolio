package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.gson.Gson;
import com.google.sps.data.Comment;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/get-comments")
public class getCommentsServlet extends HttpServlet {
    private int numEntries = 5;
    private SortDirection direct = SortDirection.DESCENDING;
    
    @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      Query query = new Query("Task").addSort("timestamp", direct);

      DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
      PreparedQuery prep = datastore.prepare(query);
      
      List<Comment> comments = new ArrayList<>();
      for (Entity entity : prep.asIterable(FetchOptions.Builder.withLimit(numEntries))) {
          String name = (String) entity.getProperty("name");
          String comment = (String) entity.getProperty("comment");
          long id = entity.getKey().getId();
          long timestamp = (long) entity.getProperty("timestamp");

          Comment post = new Comment(id, name, comment, timestamp);
          comments.add(post);
        }

      Gson gson = new Gson();

      response.setContentType("application/json;");
      response.getWriter().println(gson.toJson(comments));
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
      String direction = request.getParameter("sort");
      if(direction.equals("old")) {
          direct = SortDirection.ASCENDING;
      } else {
          direct = SortDirection.DESCENDING;
      }
      numEntries = Integer.parseInt(request.getParameter("num-comments"));
      
      response.sendRedirect("/blog.html");
  }
}